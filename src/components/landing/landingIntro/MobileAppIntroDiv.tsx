import Button from "components/custom/Button/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import { LandingPartTitle, TitleDiv } from "../StyledLandingPage";
import {
  MABtnDiv,
  MADesc,
  MobileAppDesc,
  MobileAppDiv,
  MobileAppVideo,
  MobileAppVideoDiv,
} from "./StyledLandingIntro";

import mobimg from "assets/mobiles/10.png";
import bigLogo from "assets/icons/logoColor.png";

const MobileAppIntroDiv = () => {
  const { t } = useTranslation();
  return (
    // <Container>
    <MobileAppDiv>
      <MobileAppDesc>
        <TitleDiv>
          <LandingPartTitle>
            {t("footer_mark.mark_title")}&nbsp;
          </LandingPartTitle>
          <span className="small-title">
            {t("landing.is_the_first_and_only")}
          </span>
        </TitleDiv>
        <MABtnDiv>
          <Button
            value={t("buttons.mobile_app")}
            onClick={() => {}}
            color="#FC5F77"
            borderLine="#FC5F77"
            font="#ffffff"
          />
        </MABtnDiv>
        <MADesc>
          {t("landing.amazing_prefix_text")}
          &nbsp;
          <span>{t("landing.amazing_discounts")}</span>
          &nbsp;{t("landing.amazing_suffix_text")}
        </MADesc>
      </MobileAppDesc>
      <MobileAppVideoDiv>
        <MobileAppVideo>
          <video
            // autoPlay
            playsInline
            muted
            loop
            className="top-animation-video-1 grid__item small-video"
            poster={mobimg}
          >
            <source src="" type="video/mp4" />
          </video>
          <img src={bigLogo} alt="big-logo" />
        </MobileAppVideo>
      </MobileAppVideoDiv>
    </MobileAppDiv>
    // </Container>
  );
};

export default MobileAppIntroDiv;
