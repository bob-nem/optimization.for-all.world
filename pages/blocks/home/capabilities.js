import style from '../../../styles/HomeThird.module.css';
import Image from 'next/image';

import customerBase from '../../../images/customer-base.svg';
import customerSupport from '../../../images/customer-support.svg';
import employeesKPI from '../../../images/employees-kpi.svg';
import telephony from '../../../images/telephony.svg';
import systemIntegration from '../../../images/integration-systems.svg';
import processesModeling from '../../../images/processes-modeling.svg';
import phoneman from '../../../images/phoneman-py.svg';

export default function ThirdBlock () {
  return (
    <div className={style.ThirdBlock}>
    <div className={style.ThirdBlockColorBG}>
      <h2 className={style.ThirdBlockHeader}>CAPABILITIES OF ENTERPRISE SYSTEMS</h2>
      <p className={style.ThirdBlockParagraph}>All possible areas of automation apply to ERP systems, with the exception of processes in industrial production. Enterprise systems can collect data from production systems like SCADA in real time by connecting via the API.</p>
      <div loading="lazy" className={style.ThirdBlockCards}>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={customerBase}
              alt="customer base"
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Customer base and sales management</h3>
            <p className={style.ThirdBlockOneCardP}>One of the most important functions of CRM is to save the necessary customer data in an ordered form. For example, contacts, banking details, purchase history.</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={customerSupport}
              alt="customer support"
              height={220}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Supplier support and warehouse accounting</h3>
            <p className={style.ThirdBlockOneCardP}>All external and internal requests fall into the system maintenance funnel. To ensure operational work with the warehouse, the following tools are implemented in ERP:</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={employeesKPI}
              alt="employees KPI"
              height={220}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Employees, leaderships<br />(tasks, KPI)</h3>
            <p className={style.ThirdBlockOneCardP}>Make management decisions based on data by generating reports, displaying the status stages of the processes of interest, monitoring the employment of personnel.</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={telephony}
              alt="telephony CRM"
              height={220}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Communication<br />and calltracking</h3>
            <p className={style.ThirdBlockOneCardP}>With the help of end-to-end multi-channel analytics and call tracking , you will be able to track the client's path from viewing an ad to getting into the sales funnel.</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={systemIntegration}
              alt="integration CRM with other systems"
              height={180}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Integration with other systems and services</h3>
            <p className={style.ThirdBlockOneCardP}>The software used is open for making functional improvements, integration with any external programs, services and equipment based on open standards is available.</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={processesModeling}
              alt="integration CRM with other systems"
              height={180}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Modeling and automation of processes</h3>
            <p className={style.ThirdBlockOneCardP}>Accounting and adaptive regulation of any production processes are configured, from the work of the secretary to the accounting of production productivity indicators.</p>
          </div>
        </div>
      </div>
      <div className={style.ThirdBlockDigits}>
        <div className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>on 21%</h3>
          <p className={style.ThirdBlockDigitsP}>sales growth on the same flow of incoming requests with the use of a customer heating system by stages.</p>
        </div>
        <div className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>up to 64%</h3>
          <p className={style.ThirdBlockDigitsP}>labor productivity growth on the same basis due to optimization of internal processes.</p>
        </div>
        <div className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>by 1.6 times</h3>
          <p className={style.ThirdBlockDigitsP}>reducing the processing time of current applications. entering and receiving data, forming documents.</p>
        </div>
        <div className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>100%</h3>
          <p className={style.ThirdBlockDigitsP}>security against loss of account information (if the conditions for saving backups are met)</p>
        </div>
        <div className={style.ThirdBlockDigitsBlockL}>
          <h3 className={style.ThirdBlockDigitsH3}>by 3.14 times</h3>
          <p className={style.ThirdBlockDigitsP}>improvements in the speed of generating complex reports (compared to the ability of excel)</p>
        </div>
      </div>
    </div>
    </div>
  )
}
