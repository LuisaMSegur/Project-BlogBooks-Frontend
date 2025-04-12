
export default async function handler(req, res) {
    const API_URL = process.env.BLOGGER_API_URL;
    const BLOG_ID = process.env.BLOGGER_BLOG_ID;
    const API_KEY = process.env.BLOGGER_API_KEY;
  
    try {
      const response = await fetch(`${API_URL}/${BLOG_ID}/posts?key=${API_KEY}`);
      if (!response.ok) {
        throw new Error(`Error de respuesta: ${response.statusText}`);
      }
  
      const data = await response.json();
      if (!data.items) {
        return res.status(404).json({ error: "No hay artículos." });
      }
  
      return res.status(200).json(data.items);
    } catch (error) {
      console.error("Error en /api/posts:", error);
      return res.status(500).json({ error: error.message });
    }
  }
  
  