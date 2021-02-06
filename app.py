from flask import Flask, render_template
import pandas as pd
from sqlalchemy import create_engine
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api_country")
def api_country():
    connection_string = "postgres://postgres:postgres@localhost/vaccines"

    conn = create_engine(connection_string)
    data = pd.read_sql("select * from countries",conn)

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
    connection_string = "postgres://postgres:postgres@localhost/vaccines"

    conn = create_engine(connection_string)
    data = pd.read_sql("select * from countries",conn)

    total_world = data.groupby("date")["daily_vaccinations"].sum()

    return (
        total_world
        .reset_index()
        .loc[:,["date","daily_vaccinations"]]
        .sort_values(by="daily_vaccinations", ascending=False)
        .to_json(orient="records")
    )

@app.route("/api_dailycountry")
def api_daily():
    connection_string = "postgres://postgres:postgres@localhost/vaccines"

    conn = create_engine(connection_string)
    data = pd.read_sql("select * from countries",conn)

    daily_country=data[['country','date',"daily_vaccinations"]].groupby(['country']).agg(list)

    return (
        daily_country
        .to_json(orient="index")
    )


if __name__=="__main__":
    app.run(debug=True)