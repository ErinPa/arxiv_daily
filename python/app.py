from flask import Flask
from flask_cors import CORS, cross_origin
from paper_picker import paper_picker


api = Flask(__name__)
cors = CORS(api, resources={r"/*": {"origins": "http://localhost:4200"}})
api.config['CORS_HEADERS'] = 'Content-Type'

kw_title = 'keystroke'


@api.route("/")
@cross_origin()
def paper():
    return paper_picker(kw_title)

