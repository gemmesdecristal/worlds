from flask import Flask
from api.endpoints.character import get_character_list_bp


def create_endpoints(app: Flask) -> None:
    app.register_blueprint(get_character_list_bp)
