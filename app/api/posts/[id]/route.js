
export default async function handler(req, res) {
    const { id } = req.query;
    const API_URL = process.env.BLOGGER_API_URL;
    const BLOG_ID = process.env.BLOGGER_BLOG_ID;
    const API_KEY = process.env.BLOGGER_API_KEY;
  
    try {
      const response = await fetch(`${API_URL}/${BLOG_ID}/posts/${id}?key=${API_KEY}`);
      if (!response.ok) {
        throw new Error(`Error de respuesta: ${response.statusText}`);
      }
  
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.error("Error en /api/posts/[id]:", error);
      return res.status(500).json({ error: error.message });
    }
  }
  