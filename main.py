from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class SimpleAI(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')  # allow JS to connect
        self.end_headers()

    def do_POST(self):
        content_len = int(self.headers.get('Content-Length'))
        body = self.rfile.read(content_len)
        data = json.loads(body)

        message = data.get("message", "").lower()
        reply = self.generate_reply(message)

        self._set_headers()
        self.wfile.write(json.dumps({"reply": reply}).encode())

    def generate_reply(self, msg):
        if "hello" in msg:
            return "Hi there! How can I help you today?"
        elif "your name" in msg:
            return "I’m RiezGPT, your offline assistant."
        elif "bye" in msg:
            return "Goodbye! Stay awesome, Maestro Riez 🎩"
        else:
            return "Hmm... I'm still learning. Try asking something else!"

def run(server_class=HTTPServer, handler_class=SimpleAI, port=5000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Server running on http://localhost:{port}")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
