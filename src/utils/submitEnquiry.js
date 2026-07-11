const WEBHOOK_URL = 'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjYwNTZlMDYzNzA0Mzc1MjY0Ig_3D_3D_pc/IjU3NjcwNTY5MDYzMzA0M2M1MjZkNTUzMDUxMzMi_pc';

export const submitEnquiry = async ({ name, phone, whatsappOptIn, source }) => {
  const payload = new URLSearchParams({
    name,
    phone,
    whatsapp_opt_in: whatsappOptIn ? 'Yes' : 'No',
    source,
    project: 'Aakash India Puri',
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