import style from '../../../styles/Articles.module.css'
import Image from 'next/image'
import Link from 'next/link'

import ChoiseImg from '../../../images/articles/children-trianing.webp'
import CRMDifferenceImg from '../../../images/articles/crm-difference.webp'
import ERPDifferenceImg from '../../../images/articles/erp-difference.webp'
import OpenSourceImg from '../../../images/articles/opensource.webp'
import CloudAdvantages from '../../../images/articles/data-warehouse-scaled.webp'
import BugFix from '../../../images/icons/bug-fix.webp'

export default function Articles() {
    return (
        <div className={style.Wrapper} id="articles">
            <h2 className={style.Header}>ARTICLES</h2>
            <div className={style.Container}>
                <div className={style.Box}>
                    <Link href="/articles/how-to-choise-ERP">
                        <a title="How to choise ERP system">
                            <div className={style.Content} style={{ border: "2px dashed white", borderRadius: ".5rem" }}>
                                <h3 style={{ color: "#ffcf46", WebkitTextStroke: "1px black", fontSize: "2.5em" }}>How to choise ERP system</h3>
                                <div className={style.ContentInline}>
                                    <p style={{ width: "45%", textAlign: "justify", padding: "1em 1em 0 0", alignSelf: "center" }}>You have been quite a technology company for a long time. The documentation has been digitized, all processes are carried out in special information systems for each department. But there is somehow a lot of everything, you do not understand where the money goes, who is to blame for the mistakes and you want some order and clarity. Or you just started a business and immediately want to start all processes on automated rails...</p>
                                    <div className={style.ChoiseIMG}>
                                        <Image
                                            src={ChoiseImg}
                                            alt="Childrens choose electronic-document sysem"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box} style={{ placeItems: "start" }}>
                    <Link href="/articles/differences-between-erp-and-crm">
                        <a title="Differences between ERP and CRM systems">
                            <div className={style.Content} style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                                <div style={{ paddingTop: "1em" }}>
                                    <Image
                                        src={ERPDifferenceImg}
                                        alt="ERP differences"
                                    />
                                </div>
                                <h3 style={{ color: "#ffcf46", WebkitTextStroke: "1px black", fontSize: "2.1em", margin: "2rem 0" }}>Differences between <span style={{ color: "#ffa48a" }}>ERP</span> and <span style={{ color: "#67d869" }}>CRM</span> systems</h3>
                                <div className={style.DifferensesBottom}>
                                    <Image
                                        src={CRMDifferenceImg}
                                        alt="CRM differences"
                                    />
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <Link href="/articles/open-source-systems">
                        <a title="Open source corporate systems">
                            <div className={style.Content}>
                                <h3 style={{ color: "#ffcf46", WebkitTextStroke: "1px black", fontSize: "2.1em" }}>Open source corporate systems review</h3>
                                <div>
                                    <Image
                                        src={OpenSourceImg}
                                        alt="Open source systems"
                                    />
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <Link href="/articles/advantages-of-cloud-infrastructure">
                        <a title="Advantages of cloud infrastructure">
                            <div className={style.Content}>
                                <h3>Advantages of cloud infrastructure</h3>
                                <div>
                                    <Image
                                        src={CloudAdvantages}
                                        alt="Cloud ifrastructure"
                                    />
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <Link href="/articles/implementation-errors">
                        <a title="Implementation errors">
                            <div className={style.Content} style={{ display: "inline-flex" }}>
                                <div style={{ width: "7%", alignSelf: "center", minWidth: "5rem" }}>
                                    <Image
                                        src={BugFix}
                                        alt="Bug fix"
                                    />
                                </div>
                                <h3 style={{ alignSelf: "center", marginLeft: "1rem" }}><span style={{ color: "#ffa48a", WebkitTextStroke: "1px black" }}>Errors in</span> the implementation of <span style={{ color: "#ffcf46", WebkitTextStroke: "1px black" }}>automated processes</span></h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <div className={style.Content}>
                        <h3>Synchronization of the SCADA system with the corporate ERP</h3>
                    </div>
                </div>
                <div className={style.Box}>
                    <div className={style.Content}>
                        <h3>Power and strength of top paid ERP systems</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}