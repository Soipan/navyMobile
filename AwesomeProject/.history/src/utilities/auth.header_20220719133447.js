export function authHeader() {
    let token = localStorage.getItem("72236412-b0d9-4718-a709-9a405ddd3ce8");
    if (token) {
      return `Bearer ${token}`;
    } else {
      console.log('kjfbeiub')
      return {};
    }
  }
  