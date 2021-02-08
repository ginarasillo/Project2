from flask import Flask, render_template, jsonify
import pandas as pd
from sqlalchemy import create_engine
import os

app = Flask(__name__)


def get_data():
    connection_string = "postgres://postgres:postgres@localhost/vaccines"
    with create_engine(connection_string) as conn:
        data = pd.read_sql("select * from countries",conn)
    return data

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api_country")
def api_country():
    data = get_data()
    country = data.groupby("country")["daily_vaccinations"].sum()

    return (
        country
        .reset_index()
        .loc[:,["country","daily_vaccinations"]]
        .sort_values(by="daily_vaccinations", ascending=False)
        .head(15)
        .to_json(orient="records")
    )

@app.route("/api_world")
def api_vaccines():
    data = get_data()

    total_world = data.groupby("date")["daily_vaccinations"].sum()

    return (
        total_world
        .reset_index()
        .loc[:,["date","daily_vaccinations"]]
        .sort_values(by="daily_vaccinations", ascending=False)
        .to_json(orient="records")
    )

@app.route("/api/<country>/daily")
def api_daily(country):
    data = get_data()
    dt = data.query(f'country == "{country}"')
    daily_country=dt[['country','date',"daily_vaccinations"]].groupby(['country']).agg(list)

    return (
        daily_country
        .to_json(orient="index")
    )

@app.route("/api/countries")
def countries():
    data = get_data()
    return jsonify(data.country.unique().tolist())


if __name__=="__main__":
    app.run(debug=True)