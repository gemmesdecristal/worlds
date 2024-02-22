from flask import Flask
from api.endpoints.character import character_bp
from api.endpoints.authenticate import authenticate_bp


def create_endpoints(app: Flask) -> None:
    app.register_blueprint(character_bp)
    app.register_blueprint(authenticate_bp)
