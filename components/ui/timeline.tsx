"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export function TimelineComponent() {
  return (
    <Timeline>
      <Timeline.Item>
        <div className="h-8 w-8">
          <Timeline.Point icon={HiCalendar} />
        </div>
        <Timeline.Content>
          <Timeline.Time>December 2023 - December 2024</Timeline.Time>
          <Timeline.Title>
            Software Engneering Intern - ALU-School of Wildlife and conservation
          </Timeline.Title>
          <div className="mt-4"></div>
          <Timeline.Body>
            • Led the creation and enhancement of a robust RESTful API,
            elevating platform scalability by 20% and trimming latency by 15%,
            thus facilitating the seamless management of heightened user
            traffic. <br />• Constructed a dynamic single-page web application
            with React, employing a modular structure to elevate code
            maintainability and scalability. This initiative led to a 40%
            decrease in development duration and amplified user engagement by
            25%. <br />• Optimized data exchange and live updates by integrating
            third-party APIs into the web application, refining data flow and
            attaining a remarkable 0.34-second page load speed, substantially
            augmenting user interaction.
          </Timeline.Body>
          <Button color="gray" className="flex  items-center">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} className="h-8 w-8" />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Lead Developer - OpenSchool Africa</Timeline.Title>
          <Timeline.Body>
            • Enhanced software quality by actively engaging in code reviews and
            testing procedures, maintaining compliance with industry standards,
            and reducing bugs by 18%. <br className="mt-2" />• Facilitated
            seamless communication among cross-functional teams by adeptly
            translating project requirements and promoting knowledge sharing,
            resulting in a 10% boost in team productivity.{" "}
            <br className="mt-2" />• Took the lead in crafting comprehensive
            technical documentation, slashing onboarding time for new developers
            by 35% and simplifying troubleshooting processes, thereby halving
            support ticket volume.
          </Timeline.Body>
          <Button color="gray" className="flex items-center">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} className="h-8 w-8" />
        <Timeline.Content>
          <Timeline.Time>January 2024 -Current </Timeline.Time>
          <Timeline.Title>
            Junior Frontend Dev - Axxon Communications Cameroon
          </Timeline.Title>
          <Timeline.Body>
            • Acted as a catalyst for improved communication and collaboration
            among cross-functional teams. Facilitated regular meetings,
            workshops, and knowledge-sharing sessions, resulting in a cohesive
            work environment and a 10% boost in team productivity.{" "}
            <br className="mt-2" />• Revolutionized the onboarding process for
            new developers by crafting comprehensive technical documentation.
            Reduced onboarding time by an impressive 35%, enabling new team
            members to quickly grasp project intricacies and contribute
            effectively from day one. <br className="mt-2" />• Implemented
            innovative strategies to streamline troubleshooting processes,
            significantly reducing support ticket volume by 50%. Leveraged
            technical expertise to proactively address common issues and develop
            scalable solutions, ensuring uninterrupted workflow for the entire
            team.
          </Timeline.Body>
          <Button color="gray" className="flex  items-center">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
