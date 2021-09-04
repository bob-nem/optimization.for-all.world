import style from '../../../styles/HomePrices.module.css'
import Image from 'next/image'

import suitecrm from '../../../images/suite-crm-logo.png'
import orocrm from '../../../images/oroinc-logo-s.png'
import bitrix24 from '../../../images/bitrix24-logo.png'
import amocrm from '../../../images/amocrm-logo-dark-r.png'

export default function PricesCMS () {
    return {
        <div label="CRM - Customer Relationship Management" className={style.OneTabContainer}>
            <p>
              These systems are built to make customers happy, whether it’s through improved ad targeting or tailored sales communications. CRM software is a front-office tool that is used by employees in departments such as sales and marketing to increase revenue through an improvement in customer experience. After all, without a solid customer base, your company doesn’t have much to go on. These programs are available as either standalone software or as part of an ERP solution. These are some of the most popular CRM systems in the world. The general functionality of all the proposed solutions, with the exception of some details, is the same.
            </p>
            <div className={style.CardsContainer}>
              <div className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={suitecrm}
                    alt="suite CRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://suitecrm.com/"><a target="_blank">SuiteCRM</a></Link></strong> is one of the most popular <Link href="https://github.com/salesagility/SuiteCRM"><a className={style.CardOpenSource} target="_blank">open source</a></Link> systems. The functionality of the free version meets all the needs of a small company.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$1618&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>The paid version adds cloud storage features, more performance, advanced task scheduling features, and improved support.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>£95&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://suitecrm.com/solutions/compare-with-microsoft-dynamics/"><a target="_blank">technical specifications</a></Link>
                </p>
              </div>
              <div className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={bitrix24}
                    alt="Bitrix24 site & CRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.bitrix24.ru"><a target="_blank">Bitrix24</a></Link></strong> combines communication channels with an opportunity for full integration with <Link href="https://www.bitrix24.ru/features/sites.php"><a className={style.CardOpenSource} target="_blank">sites</a></Link> created on its proprietary platform.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$1280&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>Landing site as a gift. Free version with restrictions on integration with the site, collaborative document editing and analytics.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>₽1494&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.bitrix24.ru/features/"><a target="_blank">technical specifications</a></Link>
                </p>
              </div>
              <div className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={amocrm}
                    alt="amoCRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.amocrm.com/"><a target="_blank">amoCRM</a></Link></strong> If other CRM is multifunctional and complex, then amoCRM is the complete opposite: only the &quot;cloud&quot;, and only simplicity.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$520&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>Only the paid version with the possibility of a free trial period. All the basic tools are already available in the basic monthly tariff.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>₽499&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per 1 user</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.amocrm.ru/buy/"><a target="_blank">technical specifications</a></Link>
                </p>
              </div>
              <div className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={orocrm}
                    alt="OROCRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://oroinc.com/"><a target="_blank">OROCRM</a></Link></strong> is based on the Symfony2 PHP framework. It relatively easy and cost-effective <Link href="https://github.com/oroinc/crm"><a className={style.CardOpenSource} target="_blank">to modify the platform</a></Link> to your special needs.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$3141&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>Versatility with the ability to evolve into a large ERP ecosystem. Lots of open source developers find it easy to understand Oro’s code.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>is&nbsp;</p>
                  <h3 className={style.Sum}>FREE</h3>
                  <p className={style.PriceRowD}>&nbsp;for open source edition</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://oroinc.com/oroplatform/"><a target="_blank">technical specifications</a></Link>
                </p>
              </div>
            </div>
            <p style={{paddingTop: "1rem"}}>We conduct a comprehensive audit of the enterprise for the possibility of optimizing work processes, improving production indicators and reducing costs.</p>
          </div>
        </div>
    }
}