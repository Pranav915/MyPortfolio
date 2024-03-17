import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { AchievementsType, EducationType } from "../types/sections";
import Fade from "react-reveal/Fade";

const AchievementCard = ({ achievementTitle, description, duration, desc, grade }: AchievementsType) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-info">{achievementTitle}</h5>
            <h6>{description}</h6>
            <Badge color="info" className="mr-1">
              {duration}
            </Badge>
            {grade && (
              <Badge color="primary" className="mr-1">
                {grade}
              </Badge>
            )}
            <p className="description mt-3">{desc}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AchievementCard;
