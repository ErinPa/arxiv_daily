from flask import Flask
from paper_picker import paper_picker


app = Flask(__name__)

kw_title = 'keystroke'


@app.route("/")
def paper():
    return paper_picker(kw_title)

