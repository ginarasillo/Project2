--
-- PostgreSQL database dump
--

-- Dumped from database version 11.6
-- Dumped by pg_dump version 11.6

-- Started on 2021-02-04 18:38:23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE vaccination;
--
-- TOC entry 2833 (class 1262 OID 16393)
-- Name: vaccination; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE vaccination WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';


ALTER DATABASE vaccination OWNER TO postgres;

\connect vaccination

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16394)
-- Name: vaccines; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA vaccines;


ALTER SCHEMA vaccines OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16398)
-- Name: country; Type: TABLE; Schema: vaccines; Owner: postgres
--

CREATE TABLE vaccines.country (
    iso_code character varying(3) NOT NULL,
    name character varying(20) NOT NULL
);


ALTER TABLE vaccines.country OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16408)
-- Name: daily_statistics; Type: TABLE; Schema: vaccines; Owner: postgres
--

CREATE TABLE vaccines.daily_statistics (
    country character varying(4) NOT NULL,
    date date NOT NULL,
    total_vaccinations integer,
    people_vaccinated integer,
    people_fully_vaccinated integer,
    daily_vaccinations_raw integer,
    daily_vaccinations integer,
    total_vaccinations_per_hundred integer,
    people_vaccinated_per_hundred integer,
    people_fully_vaccinated_per_hundred integer,
    daily_vaccinations_per_million integer,
    id integer NOT NULL
);


ALTER TABLE vaccines.daily_statistics OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16418)
-- Name: statistic_vaccine; Type: TABLE; Schema: vaccines; Owner: postgres
--

CREATE TABLE vaccines.statistic_vaccine (
    id_statistic integer NOT NULL,
    id_vaccine integer NOT NULL
);


ALTER TABLE vaccines.statistic_vaccine OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16403)
-- Name: vaccine; Type: TABLE; Schema: vaccines; Owner: postgres
--

CREATE TABLE vaccines.vaccine (
    id integer NOT NULL,
    name character varying(20) NOT NULL
);


ALTER TABLE vaccines.vaccine OWNER TO postgres;

--
-- TOC entry 2697 (class 2606 OID 16402)
-- Name: country country_pkey; Type: CONSTRAINT; Schema: vaccines; Owner: postgres
--

ALTER TABLE ONLY vaccines.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (iso_code);


--
-- TOC entry 2701 (class 2606 OID 16412)
-- Name: daily_statistics daily_statistics_pkey; Type: CONSTRAINT; Schema: vaccines; Owner: postgres
--

ALTER TABLE ONLY vaccines.daily_statistics
    ADD CONSTRAINT daily_statistics_pkey PRIMARY KEY (id);


--
-- TOC entry 2703 (class 2606 OID 16422)
-- Name: statistic_vaccine statistic_vaccine_pkey; Type: CONSTRAINT; Schema: vaccines; Owner: postgres
--

ALTER TABLE ONLY vaccines.statistic_vaccine
    ADD CONSTRAINT statistic_vaccine_pkey PRIMARY KEY (id_statistic, id_vaccine);


--
-- TOC entry 2699 (class 2606 OID 16407)
-- Name: vaccine vaccine_pkey; Type: CONSTRAINT; Schema: vaccines; Owner: postgres
--

ALTER TABLE ONLY vaccines.vaccine
    ADD CONSTRAINT vaccine_pkey PRIMARY KEY (id);


--
-- TOC entry 2704 (class 2606 OID 16413)
-- Name: daily_statistics fk_country; Type: FK CONSTRAINT; Schema: vaccines; Owner: postgres
--

ALTER TABLE ONLY vaccines.daily_statistics
    ADD CONSTRAINT fk_country FOREIGN KEY (country) REFERENCES vaccines.country(iso_code);


--
-- TOC entry 2705 (class 2606 OID 16423)
-- Name: statistic_vaccine fk_statistic; Type: FK CONSTRAINT; Schema: vaccines; Owner: postgres
--

ALTER TABLE ONLY vaccines.statistic_vaccine
    ADD CONSTRAINT fk_statistic FOREIGN KEY (id_statistic) REFERENCES vaccines.daily_statistics(id);


--
-- TOC entry 2706 (class 2606 OID 16428)
-- Name: statistic_vaccine fk_vaccine; Type: FK CONSTRAINT; Schema: vaccines; Owner: postgres
--

ALTER TABLE ONLY vaccines.statistic_vaccine
    ADD CONSTRAINT fk_vaccine FOREIGN KEY (id_vaccine) REFERENCES vaccines.vaccine(id);


-- Completed on 2021-02-04 18:38:23

--
-- PostgreSQL database dump complete
--

