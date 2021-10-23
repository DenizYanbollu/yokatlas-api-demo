import React, { useState, useEffect } from "react"
import axios from "axios"

import "./Container.css"

function Container () {
    const [Query, setQuery] = useState("")
    const [Results, setResults] = useState([])

    useEffect(() => {
        axios.post("http://46.196.40.88:3001/yokatlas", {search: Query})
            .then(({data}) => setResults(data))
    }, [Query])

    const handleQuery = (e) => e.key !== "Enter" && setQuery(e.target.innerText)

    return (
        <div className="Container">
            <div className="panel left">
                <h1>Yökatlas API</h1>
                <p>
                    <b>Yökatlas API</b>
                    , <b><a href="https://yokatlas.yok.gov.tr/">Yökatlas</a></b>'ın kendi sunduğu ve hizmet verdiği 
                    <b><a href="https://yokatlas.yok.gov.tr/tercih-sihirbazi-t4.php"> Lisans Tercih Sihirbazı</a></b>'nın kullandığı API hizmeti üzerine yazılmış bir Javascript API Wrapperıdır.
                </p>
                <div className="information">
                    <a href="https://github.com/DenizYanbollu/yokapi">
                        <h1><img src="github.png"/>&rsaquo; Dokümentasyon</h1> 
                    </a>
                    <a href="https://www.npmjs.com/package/yokatlas-api">
                        <h1><img src="npm.png"/>&rsaquo; npm i yokatlas-api</h1>
                    </a>
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="right panel">
                <div className="searchPanel">
                    Üniversite adı ile dil lisans programları arasında arama.
                    <div contentEditable="true" onKeyUp={handleQuery} className="searchBar"></div>
                </div>
                <div className="searchResults">
                    {Results.map((result) => 
                        <div key={result.yop_kodu}>
                            <a href={`https://yokatlas.yok.gov.tr/lisans.php?y=${result.yop_kodu}`}>{result.uni_adi}</a>
                            <br/>{result.fakulte}
                            <br/>{result.program_adi}
                        </div>)}
                    </div>
            </div>
        </div>
    )
}

export default Container