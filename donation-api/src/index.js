export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }

    if (request.method === 'POST') {
      try {
        const body = await request.json();

        const {
          owner,
          text,
          date,
          items,
          cost_range,
          current_donations,
          options,
          limits,
        } = body;

        const result = await env.donations.prepare(`
          INSERT INTO donations (
            owner,
            text,
            date,
            items,
            cost_range,
            current_donations,
            options,
            limits
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `)
        .bind(
          owner,
          text,
          date,
          JSON.stringify(items),
          cost_range,
          current_donations,
          JSON.stringify(options),
          JSON.stringify(limits)
        )
        .run();

        return new Response(JSON.stringify({ success: true, result }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });

      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  }
};

function handleOptions(request) {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }
  });
}
