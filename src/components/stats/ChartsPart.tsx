import React from "react";
import Chart from "react-google-charts";
import { useTranslation } from "react-i18next";
import { ChartDesc, ChartDescDiv, ChartDiv, ChartPartDiv } from "./StyledStats";
import Spinner from "components/custom/Spinner/Spinner";

const ChartsPart = ({ data }: any) => {
  const { t } = useTranslation();

  return (
    <ChartPartDiv>
      <ChartGenerator
        data={[
          ["chart1", "chart1"],
          [t("stats.bosnian"), data?.chart1?.bosnian],
          [t("stats.foreigners"), data?.chart1?.foreigner],
        ]}
        slices={{
          0: { color: "#FC5F77" },
          1: { color: "#FBA3B1" },
        }}
      />
      <ChartGenerator
        data={[
          ["chart2", "chart2"],
          [t("stats.android"), data?.chart2?.android],
          [t("stats.ios"), data?.chart2?.ios],
        ]}
        slices={{
          0: { color: "#8CA4FF" },
          1: { color: "#B1C1FF" },
        }}
      />

      <ChartGenerator
        data={[
          ["chart1", "chart1"],
          ["12-18", data?.chart3?.age12_18],
          ["18-25", data?.chart3?.age19_25],
          ["26-35", data?.chart3?.age26_35],
          ["35+", data?.chart3?.age35_plus],
        ]}
        slices={{
          0: { color: "#FF8B7F" },
          1: { color: "#FCD161" },
          2: { color: "#FBB700" },
          3: { color: "#FCA266" },
        }}
      />
    </ChartPartDiv>
  );
};

export default ChartsPart;

export const ChartGenerator = ({ data, slices }: any) => {
  const flag = data.filter((item: any) => item[1] > 0);
  const tempdata = [
    ["chart1", "chart1"],
    ["No data", 1],
  ];
  const tempslices = {
    0: { color: "#F3EBDE" },
  };
  return (
    <ChartDiv>
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="PieChart"
        loader={<Spinner />}
        data={flag.length > 0 ? data : tempdata}
        className="state_chats"
        options={{
          legend: "none",
          pieHole: 0.4,
          slices: flag.length > 0 ? slices : tempslices,
        }}
      />
      <ChartDescDiv>
        {data.map(
          (item: any, key: any) =>
            key > 0 && (
              <ChartDesc key={key} color={slices[key - 1]?.color}>
                <div />
                {item[0]} | {item[1]}
              </ChartDesc>
            )
        )}
      </ChartDescDiv>
    </ChartDiv>
  );
};
