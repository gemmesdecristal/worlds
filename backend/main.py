from api.create_endpoints import create_endpoints
from flask import Flask


def main():
    app = Flask(__name__)
    create_endpoints(app)
    app.run()


if __name__ == "__main__":
    main()
