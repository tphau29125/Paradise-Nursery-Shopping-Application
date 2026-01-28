from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
import os

PORT = 8000
HOST = "127.0.0.1"

# Chỉ rõ thư mục dist
os.chdir("dist")

Handler = SimpleHTTPRequestHandler

with TCPServer((HOST, PORT), Handler) as httpd:
    print(f"Server running at http://{HOST}:{PORT}")
    httpd.serve_forever()
