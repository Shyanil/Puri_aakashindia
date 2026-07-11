const WEBHOOK_URL = 'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjYwNTZlMDYzNzA0Mzc1MjY0Ig_3D_3D_pc/IjU3NjcwNTY5MDYzMzA0M2M1MjZkNTUzMDUxMzMi_pc';

const getUrlParam = (params, key) => params.get(key) || '';

const getKolkataLeadTimestamp = () => {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(now);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    lead_date: `${values.day}/${values.month}/${values.year}`,
    lead_time: `${values.hour}:${values.minute}:${values.second}`,
  };
};

const getLeadTrackingFields = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_medium: getUrlParam(params, 'utm_medium'),
    utm_campaign: getUrlParam(params, 'utm_campaign'),
    utm_content: getUrlParam(params, 'utm_content'),
    utm_term: getUrlParam(params, 'utm_term'),
    ...getKolkataLeadTimestamp(),
  };
};

export const submitEnquiry = async ({ name, phone, whatsappOptIn, source }) => {
  const payload = new URLSearchParams({
    name,
    phone,
    whatsapp_opt_in: whatsappOptIn ? 'Yes' : 'No',
    source,
    project: 'Aakash India Puri',
    ...getLeadTrackingFields(),
  });

  await fetch(WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload,
  });
};