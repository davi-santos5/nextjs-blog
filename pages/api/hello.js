export default function handler(req, res) {
  const url = req.url;
  res.status(200).json({ text: `Hello, you tried to access: "${url}"` });
}
