export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ ok: false, message: "Method not allowed." })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const required = ["name", "parent", "phone", "classGrade", "course"];

    const missing = required.filter((field) => !String(data[field] || '').trim());

    if (missing.length > 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          ok: false,
          message: `Missing required fields: ${missing.join(', ')}`
        })
      };
    }

    const payload = {
      ok: true,
      message: "Lead received successfully.",
      lead: {
        name: String(data.name).trim(),
        parent: String(data.parent).trim(),
        phone: String(data.phone).trim(),
        classGrade: String(data.classGrade).trim(),
        school: String(data.school || 'N/A').trim(),
        timing: String(data.timing || 'N/A').trim(),
        course: String(data.course).trim(),
        message: String(data.message || 'N/A').trim()
      }
    };

    console.log('New academy enquiry:', payload.lead);

    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, message: 'Unexpected server error.' })
    };
  }
};
