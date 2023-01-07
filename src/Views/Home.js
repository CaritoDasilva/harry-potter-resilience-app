import React, { useEffect, useState } from "react";
import styles from './Home.module.scss';
import Hufflepuff from "../Components/Hufflepuff";
import Ravenclaw from "../Components/Ravenclaw";
import Slytherin from "../Components/Slytherin";
import Spells from "../Components/Spells";
import { getDataDashboard } from "../services/ressilience-service";
import Gryffindor from "../Components/Gryffindor";

const Home = () => {
    const [dataDashboard, setDataDashboard] = useState()
    const getAllCharactersFromService = async () => {
        const data = await getDataDashboard();
        console.log("🚀 ~ file: Home.js:15 ~ getAllCharactersFromService ~ houses", data.houses)
        setDataDashboard(data.houses);
    }
    useEffect(() => {
        getAllCharactersFromService()
    }, []);
    return (
        <div className={styles["home"]}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABWVBMVEX///9dQQ0AAAEAAAD/ybV4LhhqNUP/0bxiRA7/0r3/1L7/zrn/zLhjRQ5+MRnDeGD39/fj4+P/mF3LfWTd3d3p6emenp7y8vK0tLRROAscEwTX19eUlJT/2MJvb2+9vb03NzczIwcVDgMmGgUrHgZiYmJKNArIyMi8vLx7e3unp6eDg4MpKSlBQUFBLQlHMQpSUlI7KQhjSkMcHB1KHA5LS0wtLS1qampbW1v/vJ7it6XvwKxRNwCTc2g0JCEdHR4rGhWQWEdEKSEmDgdqKRVeLjtYQDq3j4H/r4f/nmj/k1PQo5N2WlEeEhFEMCyIaV9fOS6ua1U3GyMxEgl9TD09FgxbIxLAmor/uJb/pnlbRj8bERDUooiGYDtyUCWUbEqziGvFmX58X0KngHOQZ0amiXqBXlXbt6WTbWQyHhiJVERqQDPArKaqmZNSMiiTg38sFRuFQi6fVT+ITLtzAAAXzUlEQVR4nO2d+VsaydaAI01semGiRkAE3AFFcME1tBATDUzClkwmYSKZ7fKN40xyc2fu///DV+dUVS/QRFCrce7DeRJF1nr7nDpbVTcPHoxlLGMZy1jGMpaxjGUsYxnLWMYylrGMZSxjGctY7rdMRSKRqalRj0KIhNKZzaODpcNsNnu4lNtZ2AynZ/+HSGfjOclF9nIbc9OjHtsdyNTcIQXyOcTEXJgLjXqIQ0okEpqenZ0ORagRLmYpXK8KLdCdzD9ElaF0ePM4l2UwvsOdzbnpDUQhP1ZWl7dSUSbbW8tr8yYmhYyMevjXyPTcwpLbXKN881vRiQCRCSb0dnR7eZ4/g5jrRmzUEP0ltnlotzyfXTvk/1rUYnMIcKbWVkzIg/SoSVwlFD7kRFxtK0RMBa5Eg654XIKB6O4KPRSSlFscNU6PxDZsdGSubaeifOjECMnI5yfc9efQ5UQUnopvcs/0OHtk4s0vp5xzDYxwIrV9LR6H3J5njMl75Fg3+Qya35roM9UGl0AgyhnjowZjkvbRAa3skrl0SzwqwegqfcvsvXCrcca3NcBEG5wxNU+t/h6oMUkB75RvAmx1i77xzohzuakDHMfyHfMh48QaIu6N1KlO5TB+pb4e6W4qwRRVY2Z0gJElAFwRoEAqgYl5RNwcGWEOPn+QUH5zxmVE3BgR4DEFFCrBbZwHRyMB3EATFahAlEB0ZIhhTwBNRO8NNU2djAfCEMMeA4b2YBJGxavQQlz3lnAHALc9AURE8Kie1ho4CZfFBHo3xBQgPvUQcBYA5z0DJEFjFxA99DYH8Hne8QHiKkxFz3obGVDhlkeTkMsK+cysR63GEACuegwIU9GzqLiAgcJbQGKny4DoSSkVAxXueuhmuICdLnlBiKHQYxsFoXbqQbGI6ZpXsd4hQVItSj7xq40HEApHAUhE8qI3hSpMjYYQ6mHJJ7o1dTyIClOiUnIPlBgbRIUrkrQqpDuFSnwqNuxvXF8VBmj7aF6IHoW708j1+VoQm0fAuHz3iBj2syIJM9em3LTQoUs1AtpwUdEJ+NL1ZSFkHu1Wma2K3jUi1hgH4gCnwUi/mpGiL5BaCblCl3PvGpEmNuKq/XhXey3Qs1qI/Yaa4vfLRlkMItiIuCZ4DnJu25Cj86tdnw+JVd3Q/U+e6MqlCMTALvgaUalbj5HCsq8DAG2oIus/vJrx+9Vin45jr+qHEZFF1BzsQujmsQ82CCZUVv36tzMzP+h+5UpyzYDW5m+R9gXA1ywIIoRwbwty6FXWbJ41sA3IVc2vP3k180EnWqzBtFwLdg9RukWTBz9EVF6Tc9ZNOOnt4T8AKssn/ERmZl7Cr0QZELtShBXngRpaxIVE6HPbp2Ggq5tBVVjQn/h1/eXMDBDqWr2n5YGqH3o9wHZgwUzFNGxiXdMw2lXso05r6odXL38gE/HVE2Kmfq2KU9Ex2KiLXq/ji6as21vkHQ+FeNNFp+vE4LsSdP5NVDhD5OWHmZlvgdCvdKSuEEPNdKhVK9i2YGvuwecI2YeSAcdiI4TItGojBOvJq/qHGSovkdAvX3TbKWRe/ZToHkjQOsy3wKArZCkqbnkI+Il5vs1jRKkjhVhIBQH9utG90Bhcw70yrtpaW9l1QcRs1HwAJ/KOSMLoCqrS+bETATJuqSH7/SRSvHzy8tXMK0roVypddhqghC4ZPDEL16ILzcVaJ8FjKWIihqmVosmkWOtr2zk7KiQj9YMf1Z98+EFniGreaaeU0C2FD6z2WbSLOqs2+EvERFxHT4M2Bo0MTGDM5AQ9nCSDWX4AP0qEATI7tTwFzkOfW7LD2gM9gJTJ/CMoaiLimtrELp9EXJfsU+HBKxWAfuB+lItccfRY0VPAkHumXIDuZutdtws6Pwsm4rEAQsxpVnAMECScDg5DhYFAT0w/amqx7AjysBX41HWVfIVqt8fPds15+LA9EYQZcwM3eBqHDsF2pXKCAr3kfpQLjfvmuKELUPW5ZTYrTLs9Ouzy2/A0IX3TA75pGwbrtBy4t6VRjX149cpJ6FdqkjW/wBWeypgJrHbZo0RbPN3JOnWmtjtXhFVQSYqIxmn3pehn6qZpfvvEaaV+vWBFDHxuWaYetmsqwrs08QOc9+NrrOmJ5YmgpuLs3CKYF1qObW6g8yjKnEfvAiQR49I0PgycRcWvn/aEBtBuWy/1FpWY1NsIl0W2MrDQR8I1a25gDC6gkWrwU5NlzalEw1IiOBpSRGoFicUdB2Fdabn01Z05MKpUiDMFwQojwA8knUh4s4wq1D7++NNPP/348y8fDU3WnUqkr4tyr0uDiM9mkMDR0JRyb2aecuoQ3mNJFOE6rzDQcthxBbV0MNx/TJ3AHScnJ4EffyloCoekM5HYJKr+QkX/U3T2qugM1XSn53WxUjxKwtpRJGSwCsNKpWgwxHrw1xNrXCep4M8FjZmrXGPhweZ1E026x5jBoMesKf4EOiG7O0V2u+MVFi4e4HYoXkPxdBPrphoGQ6JDPJ8kwE4qOTn56Vc/nZ+oxBSqUOI+Sa1JNneDPuhKYfq2KzG466zckFBUXzhupv9WnwZGWaVqUX49Se2urc7Pry5v0/MvCCNOSDkPetiG53ZUvxORvSF45FZCxw6WIz3tjvg4LWaFEZoDYq4GjctHFaVWa7Yz8ua3qCJ/9OssscFVqbrNA8lNtogTZEfqX7981GWja78HRqYtzwjNEi5FjzTqEpNutdroPu1wO4iIwKSW2al6VVsk0RMddsZGgC5bBYmT+kgmqEOJQbMXzewZCEVZqW0e4jHfDnI/o2lUf41apVVtVZqUFpfYoh+ZEkEqqgWoGT/jVm7I5uE8GepOTjRb+DQ/CciiW9TzSgIX9MGXrto8wypaUF72y4USjL9ZUFRZ0zVNVQvFOtxDXOUJOlroSkmNqh3w15MTdtKBj2a8CHDCVgRMwBRr66Xg7YKBoNBoYeu40XMFdrE/o2uFNnmkZiiWCeqK3qSW+pHeKReqBU22AHUDz9oLsqoJextRoqj/U/yoxGV7GIEZj454dXd5RXBO41uxslHqOxoa2JWEjtAhCbTMqsKRNMfj2sdtdqaaTVa2fpFxWceqojDJJzYb2OUncZIfc6IIQzbzMc/3bckyGGRB9XeLbJAH2kZPKs4e/fFkYo2dSHtaKtXpzRIYsmyvrljkDWCsocvoOVGADx48NUt7uv2a/MtrJO20q0rWNJ56awV4guxO6Nf+hUzlTsEgLzIKrVobJ7Ou0wIS0x3MaCAdousGKAsCd38dm14OnCh8YsOQC3YfqRQ6tXyzyhJvBQy1pbkCqhV4fb4qs/xVl1WjCIxlQ8cqasXMBKD5iIQH4c242EsThHnCjYc2X+hUyMDyknTBNSgX6WHO+1n2SYJIQ3EHxMlrr0HIexl5OGqaXGXOhsbJKP9EUWuHlszyGhxzmmZCljHnlApsnJClUIdQ8uNdUBs6orw5C0G7JaPbgvUEHKJyQsbVxxR6WlbO7IqsfC3JsfINfTemmCqByrM2lNwyL+4h1ejgZTJJ871OSDfaYOFmfWV1BiDPkYoJ8jhUHvNmnMTuhQcnzyxKNNHHkqICYFrDmmlKybx6CdcrZqS9KoQUqG3wlxnVakE3a44meuaWxH0nqw3h6hJebNhP0h4Sbc4UDANjIddEwVQhedJvrPtWgpygGxBstEqZNL14CpOvwhHhmOUVzGzwjVjYAJ2KSrjtEnmKiBiHibRLJcuVkHHbLj5zRe9V8rBDo4uQJOLctHWjxILApWrH1xR0Wiah0GTNIbO0aTrPtrCB1PjQKm6ExOiKXd5Ut3knojFu11fsfVRyUC5lUq3USiXewUBHk/QCEHYK+9gEKTXqSMlHRgbu67FSiN7E6WqazZuoV2YioHUs5yQxzwNKhDpSV+WKSTjvjaMBiZkjqiiGUSC+8oqrSJN6PA0SlprFCnEmhiwrakJVtASZaRXNqUJ4Dde1KrG5C1bBrFQStbzdK7DgTctZEi10qIqanFDtWIQsWkAOwM25fVoq55vFTgsmGtOXYXdOPMGD/ga278jhoYQY7706gY0U+iUa1sE6yVG2xTutzOBxgxudh5eSmzR0c0ZahA3emyOH7VKh5syWgmBWeHXmOiHM05Y1kEGDs266Sl3PMwAzmAN0s9OslRulto2wzGKJqw41EgzLQJi4xEQ4QBemvDrNcp2MSTFOyUeWNJaWWQWSLldrjUbeSjd1AzyIqqqKrBu//16t/Fas5SHgcXWVbIQdZu5w2BqGX9NgX5W0FYwioGcXHwhBKZEAf4/ORCY66tibEyrxJ1b8AysuWTrWiK9RoDQ2CYs258SPFEbEeqlRrkHuFqVXkBCyA8NddkBrKuQh4A/RV/YrAcnDDZuv5dRV00qJjus98ZC6UFYcE0+DdeiBhxcghPWZugGNWwj1mEP3JC0mYEviC+CWgHspmfO0YCYO5oGQrySeUPhoq8SrYM8kjr5EojuCMWk57deq0OtWNma711Zw+WlNKJU61lEi00+qGIVq9ZLr11tAenEoPLIwKlRizbXKpY37XnpISy0gXTWqraqjD4dHQNehOUybJQI7M+6SoRZE6lw/XQskFZ0bICTPLhYMaULZ3vzWHH04eEMMjdDM8IG5SJI4lnRyYWMzHs7MLabTsRhc7BFn/FTmGC73KBXBAqFVQRC7VaUjYM1tivar/BkhyShg2ZyuQ7VbBaGEe73piO/p4dJBcuFoz1ze1mAm5Q3nfFNwfpVdOcB6G72VP3thhZm2UsSgm6gIJczZy4VuVHLXKRTqOiLWO1bTW1OMDqQwF70bF/BhUEvHHRHnNdqGH2qnogyHQ+CpMnEboZtIZWg56Rq28OvNqgEhXdarTYiXUlPr42OxZVV1jTGQQtTxBnbjCtitFHjOWuw6Qqmsg+KUKk+pL/IXDZqBtlvuHhY1RdyHz6VPrkP5S+coFFbSRQLaIJLI8w6laxFpT1DWO6cOG253NFtG3kOCgb7ajSgb4Dg7CVOF1WpdrArpNQauY6QDVfRWjfdcSrWWbilQNwp8Y4bOZypVelNXbPCa3GpzB0134WCkEHw5hfVrCX0w3+iGGlI/VFutVrXgd+waIrlnDTytrmpVs8cvo3aIe1JVMlt1TUnocGIfzwWUMl9rEl1URK4zU2qpfG1NJ9Fb6zZKXH0raolCx9Zc9WvGBQJcdKq/F37/vcIMgK7xqHQzCpGs8Cbp8fWEMJRyoSfk26wU3McpXfq2mqc6XbtwyCW1Bgq4d5yMe3A1jMwAhMiYLyj9Sgw9wfYxNDoFu/nKWsW+v+G0SbMGDVoFpKbwogH8gDVIB2O8aGlKvwCo/XZ62ixoatfjilyoQIej0cgXqzo+qqtV3LrozcVMQHKDESJjqVhQZXdIWevBo/qVVUVRVfKTalc1LiVvAUmtNCAhdX3EEBW1b1Z9jegJA9J1eCOPTBQkPaCZWpD1ZotEjn4ZW388WSvgthyo6b381gRcjBlG0GuUr1oFTVa0ATmJrWqFYkOiBronbLOFuySHJDQpS/liq2rARJP7k+qarMpGgYVDfOWm1xfYnxvKTJ2QsACXrxUr1YKhQStRhdIDBdwLIfcXqp3mBU1pWQrj/eWDQzcjtGOi1BvlfO3y6qoDUrxqXubLDasPTp+6lBnJ15YMHC8GAu0V/vhB3EMH6pDryuC7QD8Y6dexxG5hpv2ZuOQONjPpUX8Ni+/uCCVfcuF4Z+c4uRHOZDLr06FRs1HZuEsdPvU42A0ki3drplmPryk7gAxSBg/FuHO/vqTjwc3Smq8iSkc3mn/iJu1gZfBwjPGhYvtUbG7zYE/cUvegZfBQjL7BmoRTocXwEf8mInHrbLdPa9wYc1+fjlPwZXQ7ezzxwdcIIxyiDB4GUUr2ydMis+ubSf4FWfzJkN4J650OVwYPw9gTHUPp8ELOto7P5fmnLyI30U7tCcpN7XssIuBNevJxSfrjy/fPHj1+/Pg1IRTX4D8SRYjXs4zMLsYX7EbJbp5++fTsDcA9IvIYdCguIZq7TY341QePMhs72R649vNPf755xOHo7z8IobhU4eZpjc0TusH3GuUpMUpTcRTuzbNPX6APIOaqH0xuGi9gs89mH0S6zdGCI4rrZfv+i7lsJ3ZzW/hmhHSFenHPjVHyfU4yw2z/8dquOPz95s9Pz9tdKhZ5ec+blcF8u1bkqPflkvTvf7Op1wamx66Ko89EWUrGhVaT2RsRAuDUdDq80UMoSf/5bJ5y8Omxyfb6j7oFx27tYR9AdJPqJmWwtERCHPOUPYALnw9hZnVgi6X0CLzJ87pplGZYzB6FFz363uCblME2Vyk5MUmN+BnOwJGaCbh0ndQ94YBtZ3Pu9myRUGxxbi4zN5eOha7pNEeGS2sk6ycbcf3567a1M3/p8zHcmddwZ5DPMeGyBxvh9O29ZiSW2Th4KlmylzuKr3/loA1TBuMKpzVk7infPDfz6M//gec0NJ2dp8G9yUJ8cfYuuvqx8LEFZ70/HL/jcJ+omhnYTMnbfDfJDI6HOJp4Pf6TK+tQ4tebUDrUholRxu5oxSK98bTbETtJfUeLLqqcHnw1+LvJycm/yLi/WFGAu8q6WQzxbXEKrMnE7241JrbpnNHts7dEzs7akvP+47muz5yaPRyEkLz0rxcEcPIFQXjONEfs8w0PcbanllVZk+lllu4q0IXCSzaKt/vvzx9+w+Xhw/P3787sylxIc02G0vGka1riAkj5KOEpKs7KTRxWQ26WipUinDVzV2eHpo+s4Z/tI9xDh8Ad5/tn1rMON6enYhlekA7C12Z8lLDtnpuQEBfO2vZyS747sdH1nKm9t+8fdsPZMR++f2dp2myTXM/IJqBF6LO/FiVHvAkzjOmnlrXcxZrT3B7/qLP3/eksynMbJB/g89OvV3p2vsnJ75w2SRTXtf4ytcEeOroDDS7m2OGq739Fe07Ih+/fWge5/nb/70ePn/Un7OabnGzzI0MS5j5hYDq8kFwI30FBNJ1k6jgj1jkQHjfXfci7nn//7G/yx9/EL36llP3rhRNwEuAONsPiE2a6sx7G8PZ8CDwGeUYI/3z8+L/wB3H7f/Ql7OYDI/XmC4ygh3RTPkL4jozzNXH4jPD7voT1LsAXoEJvTvrcQU9xdhM+QvgegxolfEMqnP5m6jIL9zzZNRJGBb63wvrDYabiw3M4PGQCwu3/kvSkrzeVHHb6Ausmb76vGL+492yfyLt3JDmrt6X2+TBahJcT5f1Nbv5NzPS15MSyFXxth4n6PPsS2JyzcsB4P4w/hbE+e4SuBgifOYpYacn+p2mn39Hz6bwBxCsfOS1rOMK3EjZRqDMlSWZbsvh2YvhNbF12+sLnpQYB8WDP5zjuZ8NY6Tf7UAMRMjIlz599/9qqYOnSWMihU65An8ffcJvh7QeacA/nVMGZtp99+mL1iOg7ZZkbsW96k/6afFFHBWY9XKefCi+ZeT3gDR00bPkz9y0Q6cxEZcGuxL9oEivyOkddEomb+XP7JniU0NftrBZsqWQk65gD8N/DzSRhk+/dzfAwbWN0e0s7G+HF2cXDI2eq7Fw8laSkd7tDZ3NmvTRUlLcD7sM75Bbic+npvgO3VsDheHq44ynGSp+bqu8hTdoGOAn30LTkhbCH29SmDlGB+zdVHwUcqEnE96KIuVh6X8FIRQB7uzFDAg6wJrnO3LV3UR5kKsvyNeyo3YCTAQ40r+jJ3V5dQIbLotWDgC7EOwJ6PkRhQZzMEPVBjBRph55vOZxNmqHajGTtgXO2d0MmX6HpUexBnw7z7SlW2K4PosVvztsI6E2FdzuJpMNHuazPFrIGUeA+jaSefWX7rSW9Z2aVpNy/VoHv8du2pKzHjuMWwmO/1H73/rpp+M0352+pAj3Mvm4teKLrQJUF4Ttjqd4/YQqassMJvx4VCd4+z9ST9+MkgUElzcdNov+5K6a16ETL93+Oi2GSPrSFxbYZ/K11w326cMjaE/fvZIHrZWoux+OiVce22+06+W9tBMFfx/fuRIFBZTqcs7da7CW79feSl9WPAIHovyT1k2wyM6qT4+5WQrPr8Y3kwZJ19aD24cFR/A52H90zmYqEuET+19jGMpaxjGUsYxnLWMYylrGMZSxjGctY7pH8PyKnGYFi4O9gAAAAAElFTkSuQmCC" alt="" />
            <Spells spells={dataDashboard?.spells} />
            <div className={styles["container"]}>
                <div className={styles["house-container"]}>
                    <Gryffindor gryffindor={dataDashboard?.gryffindor} />
                    <Ravenclaw ravenclaw={dataDashboard?.ravenclaw} />
                </div>
                <div className={styles["house-container"]}>
                    <Hufflepuff hufflepuff={dataDashboard?.hufflepuff} />
                    <Slytherin slytherin={dataDashboard?.slytherin} />
                </div>

            </div>
        </div>
    );

};

export default Home;