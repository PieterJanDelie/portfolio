import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Timeline from "../../components/Timeline/Timeline";
import "./Home.css";

const Home = () => {
  const timelineEvents = [
    { year: 2002, title: "Geboorte", description: "Geboren in 2002." },
    {
      year: 2014,
      title: "Lager onderwijs voltooid",
      description: "SBS Desselgem afgerond.",
    },
    {
      year: 2020,
      title: "Middelbaar onderwijs voltooid",
      description: "Boekhouden-Informatica aan OLV-Hemelvaart.",
    },
    {
      year: 2023,
      title: "Honours Degree behaald",
      description: "Getuigschrift Honours Degree ontvangen.",
    },
    {
      year: 2024,
      title: "Bachelor Software Development",
      description: "Behaald aan VIVES Kortrijk.",
    },
    {
      year: 2024,
      title: "Momenteel bezig",
      description: "Banaba International Management & Bachelor AI.",
    },
  ];

  return (
    <DefaultLayout>
      <Timeline events={timelineEvents} />
    </DefaultLayout>
  );
};

export default Home;
