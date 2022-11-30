import React, { memo } from "react";
import { FooterWrapper } from "./style";
import footerData from "@/assets/data/footer.json";
import IconFootLogo from "@/assets/svg/icon_foot_logo";
import IconWeibo from "@/assets/svg/icon_weibo";
import IconWeixin from "@/assets/svg/icon_weixin";

const index = memo(() => {
  return (
    <FooterWrapper>
      <div className="footerBox">
        <div className="footerTop">
          {footerData.map(({ name, list }) => {
            return (
              <div className="topItem" key={name}>
                <h4>{name}</h4>
                <ul>
                  {list.map((childList) => {
                    return (
                      <li className="questionText" key={childList}>
                        {childList}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="footerBottom">
          <div className="footerContent">
            <div className="leftBox">
              <div className="logoBox">
                <IconFootLogo />
              </div>
              <div className="textBox">
                <div className="textOne">
                  <a
                    href="http://beian.miit.gov.cn/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    京ICP备16017121号
                  </a>
                  <a
                    href="https://z1.muscache.cn/pictures/carson/carson-1630514828733-435235f3/original/7c3906bf-e700-43a2-bc1e-38d8fb2f01cb.png"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    京ICP证 160773号
                  </a>
                  <img
                    width={20}
                    height={20}
                    src="https://z1.muscache.cn/airbnb/static/china/public_security_bureau_logo-5d90debd8b3d783447eeffa635df1972.png"
                    alt="中国公安局标志"
                  />
                  <a
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502032345"
                    target="_blank"
                    rel="noreferrer"
                  >
                    京公网安备 11010502032345号
                  </a>
                  <a
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502032345"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    安彼迎网络（北京）有限公司
                  </a>
                  <a href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&serial=91110105MA003A481G-SAIC_SHOW_10000091110105MA003A481G1618910800838&signData=MEQCINyfcfPfcHGXkZ5wcMjCQusHvcciO+xzHqw7aFEdqrJwAiCTe81uChVDmMOD1SmWhnC2Nja4+jX1wp1E01i8iBbTiQ==">
                    <img
                      width={20}
                      height={20}
                      src="https://z1.muscache.cn/pictures/carson/carson-1630570578816-f7812cf5/original/90b7269d-4bd5-44dc-89c1-b50d33fdccd0.png"
                      alt=""
                    />
                    <span>营业执照</span>
                  </a>
                </div>
                <div className="textTwo">
                  © 2022 Airbnb, Inc. All rights reserved. 条款 · 隐私政策
                  ·网站地图 · 全国旅游投诉渠道 12301
                </div>
              </div>
            </div>
            <div className="rightBox">
              <IconWeibo />
              <div className="weixinlogo">
                <IconWeixin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
});

export default index;
