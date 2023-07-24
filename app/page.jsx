"use client"

import booksdata from 'components/pages/api/books.json';
import axios from "axios";
import { useCallback, useRef, useState } from 'react'

const Home = () => {
    const [obj, setObj] = useState({});
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    return (
        <div className="HomeBody">
            <h1 className="Mainheader">Welcome to the 100 Books website</h1>
            <br/>
            <p className="MainParagraph">This website was made so that it allows users to look at the 100 Books provided by 
                <i> benoitvallon</i> easily. Below here is the table that contains all 100 books. 
                Please use the filtering & search tools to look for the books you are looking for.
            </p>
            <br/>
            <hr/>
            <div className="searcharea">
                <table className="searchbartable">
                    <tbody>
                    <tr>
                        <td>                
                            <h5>Search   :</h5>
                        </td>
                        <td>
                        <form className="searchform">
                            <table>
                                <tr> 
                                    <td><input
                                        type="text"
                                        placeholder="Type here...."
                                        required
                                        className="search_input"
                                    /></td>
                                    <td><button type="submit" class="button searchbutton"><img src="/search.png" alt="searchbutton" border="0"/></button></td>
                                </tr>
                            </table>
                            </form>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="Filteringarea">
                <table className="filteringbuttonstable">
                    <tbody>
                    <tr>
                        <td><h5>Choose Books with No. of Pages:</h5></td>
                        <td>
                            <select className="bookpages" id="pagesrange">
                                <option value="tohundreds">1-100</option>
                                <option value="hundreds">101-200</option>
                                <option value="2hundreds">201-300</option>
                                <option value="3hundreds">301-400</option>
                                <option value="4hundreds">401-500</option>
                                <option value="5hundreds">501-600</option>
                                <option value="6hundreds">601-700</option>
                                <option value="7hundreds">701-800</option>
                                <option value="8hundreds">801-900</option>
                                <option value="9hundreds">901-1000</option>
                                <option value="1kabove">1000+</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Books' Published Year:</td>
                        <td>      
                            <select className="bookspublishyr" id="PbYr">
                                <option value="BC">BC</option>
                                <option value="1stCentury">1st Century</option>
                                <option value="2ndCentury">2nd Century</option>
                                <option value="3rdCentury">3rd Century</option>
                                <option value="4thCentury">4th Century</option>
                                <option value="5thCentury">5th Century</option>
                                <option value="6thCentury">6th Century</option>
                                <option value="7thCentury">7th Century</option>
                                <option value="8thCentury">8th Century</option>
                                <option value="9thCentury">9th Century</option>
                                <option value="10thCentury">10th Century</option>
                                <option value="11thCentury">11th Century</option>
                                <option value="12thCentury">12th Century</option>
                                <option value="13thCentury">13th Century</option>
                                <option value="14thCentury">14th Century</option>
                                <option value="15thCentury">15th Century</option>
                                <option value="16thCentury">16th Century</option>
                                <option value="17thCentury">17th Century</option>
                                <option value="18thCentury">18th Century</option>
                                <option value="19thCentury">19th Century</option>
                                <option value="20thCentury">20th Century</option>
                                <option value="21stCentury">21st Century</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="ResetArea">
                    <button class="button reset" id="resetbtn"><strong>Reset</strong></button>
                </div>
            </div>
            <div className="ShowBooksArea">
                {
                    booksdata && booksdata.map( books => {
                        return (
                            <div className="box" key={books.title}>
                                <table className="BooksTable">
                                    <tbody>
                                    <tr>
                                        <td colspan="2">                            
                                            <div className="BookTitleArea"><strong>Book Title: {books.title}</strong><br/></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Author: </strong><h6>{books.author}</h6><br/>
                                            <strong>Country: </strong><h6>{books.country}</h6><br/>
                                            <strong>Language: </strong><h6>{books.language}</h6><br/>
                                            <strong>Year: </strong><h6>{books.year}</h6><br/>
                                            <strong>Pages: </strong><h6>{books.pages}</h6><br/>
                                            <strong>Link: </strong><span><a target='_blank' href={books.link} >{books.link}</a></span>
                                        </td>
                                        <td>
                                            {books.imageLink}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home