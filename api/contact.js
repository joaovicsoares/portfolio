export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessKey: process.env.STATICFORMS_KEY,
          ...req.body
        })
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Erro ao enviar email" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}