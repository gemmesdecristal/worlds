from api.create_endpoints import create_endpoints
from flask import Flask

import database.core as database


def main():
    app = Flask(__name__)
    database.connect()
    create_endpoints(app)
    app.run(port=8000, debug=True)


if __name__ == "__main__":
    main()
