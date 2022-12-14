import React from 'react';
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: string
    name: string
    lastMessage: string

}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <li className={styles.dialogWrapper}>
            <NavLink className={styles.dialogLink} to={`/dialogs/${props.id}`} activeClassName={styles.activeDialog}>
                <div className={styles.dialog}>
                    <img className={styles.avatar}
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD////v7+96enp/f3/y8vL29vbPz88lJSXd3d38/Pzp6ens7Oz4+PjMzMzAwMCamprGxsZHR0dXV1czMzOUlJRzc3PX19e4uLhAQEDk5ORdXV2JiYkWFhYtLS2NjY1OTk44ODihoaGqqqpoaGgQEBAeHh5jY2MTExP3PsToAAAJEklEQVR4nO2d6XbiOBCFzb6EYLaEPRgMJO//hBNIMtjgkqpKJZXN6ftzznSjr21rqeUqqoVSvbN4a3wuu9tTFJ22H8mxeYjnbf+/G/n/iW+4eLf85irSeToa9r3+uH/C4aZbDHfTZNTz9/ueCYfvNrpfdXcrT0PwSdganZF8P09y4WUU/gh72MeX0VtLfhy+COdTOt9FDXFGP4S9hMd3UVOY0Qdhm/F+ZjUSHY0HwtSN71vdueBwxAlXS2fAb73L7QKkCQ8SfBcNpUYkS9hOpACjaCc0JlHCuRzftyYy23JJQvcp5k4iu1VBwqY0YBTFAsOSIzzKA0ZR6j4uMcLEB6DE6i9FuPcDKDClChEmvgC/zxuOQ5MhZB4kcDqUgLDhEzCK3E7GEoRvfgGjyGkjLkAY+waMoroq4Yt/wGipSmiNFUqooUjoeZb501iNMMBH+CN29MaRsB8KMJoqETrGnCjiropuhJ1wgFHEDN24EX6EJGwqEIof6s16CU4Ybpr50WdwwlFgQl7cxoEw9CNkrhgOhMEfIe8hOhACmXmfeg9KuAgPyDpG8QknGoSM0BubcKUBGG0DEu5UCKNOOEIdQMZRmEsom2YiKBjhRouQnDnlEgaJzhSJfMJgEoYIsBWrG4gw8LkpK2r9G5MwYPTiXtRoBpNQD5C8XvAIB4qEsyCEY0VCakSKR6hwNLyJmIniEXqpSsCKONXwCEVq17gipr15hFtNQuJBn0XY1gSkJhNZhDqn3z8R920swqDpigedaMsFizBY0rBYtJrFKhLSAm4sQpVAYlBCxbPTRYOnJ6Rl2f69pYV6/plGmZBWeMIiVD0eBlkPe6qAZ9pgWYQtVcJ9AMJXVUJirpt3PlSLeF9EjHrzCBNNQmKWlEcYqOSyWMRGGh6h6raNGNbnEaoegYlj5RGGLxa6KQlCWJvpEVJ7aJiEHjrxsKJWfDMJFXem1M5SJqFexHRCHSo3j59oEZL7vLiEaisi2eSFS1hXAqTmRx1qopTST/TSPTahUjSKXs3OJtQ5I1I3NC6EOgUnjAZ9PqFGsIZRXupS561QJMxpenYgHIYn5LQ+uXSUBF8wWK35LoTBH+JraMJaEhaQ55HhRBh4OuUN0q3/MOiayDSrcSMMGd5nbGcECEPuTmm5bTHCcMs+24rHlTDUOZEcvBAjDPWect9RCV+MIPOpg+mXgHuLN4uomzYOwxMg9P8p8j9CGULvXV5dJyNMEZ8oz9Un/FlGjNBv9NTRBlvIr03MtvRRrvaQUp573p6is/+lmG+iJ0R3p3YnwvYp03jsY7o53wLAww8FwnY3l82TXzSWt7DFmO0R6UDYuvSVZJsfBsKGPJnWkesLwvsk+YTtr+sw1tn/JrpHzbiz/nSS8d5Tft7ir/Ir16Qjd9LYZp7YX9UAa3vKJezfSttyTZ0DoSBq5i/t37xDQ7q3ZEHyrVYSi/85M0cPMmWCnPeUSZgPXuS+xVpr7QqYjVjkFyHGfCrTYbnMR6M7TpPqZzYLel8jSN8BsAgfSxNPd62rC3YF6jr7ra0e/qnoPp8cwkLP2fvE14L1HKe5f6midmOywzeDEFgRpvd5kyH5e2zm5specfEc1QSTTghvzh4qzuoHwsuaLPJHecg9hepLRyY0RWWOjzVnvR0KcpLeHeRjuNWYaDNEJeybB1yUhh6kxy/Tn/loxPcv+Cox/P+e+y1s39as2CFnlTYLNzvTTfwYhalbyshpAX4iIcK6ewJ6HtR74/Qw2m2azc3b6LDo9Apzui177SppsqER4k65UweHcdvzu4o02ZAI0c5Ce6Yl7hxpR0ExiyIRUhbxJvkc8Jqiq8cpkw2FkHi+3aeUVsgxyU2EUDpEIGScbme7DiYiP1h8Uv9mfLU3npBr7zUdDU3Psj7ecFob8O1deEKnE9F6txgO8ovDa2sej/hGN+hjFJpQwmTvNJsk62Oj0Xj/nLjG5db2IdMIdc0+ioRddLGEqp47hcKmTZGEqg2HgJC5fRxh+d7RCL3s4whJt94GE25riCJUctS1CfcQMYS6tlAGoaJSGMJEmwSUEKGyC4ZJmMJvBGH5lsKbEJXfdkKPZRbuQoRsrIS6HhhWCRCq2VrjZD8K2wi1OimxOjkTKral42Td2FgIy/4IEW2zFsLSP0J7GsNMqGtUipMtPGwm9H7/poQsrcFmQu3Bo2SpXjASKvsjYuVAGKAKX0LmBcNEqGs8h5c5JmUirMBS8SPjXGMi1B44WsZjooFQ2eGSIGPAxkCoap5Pkyn+DRNq+nlRZcpEwYQKhgJ8sQhLfvTNy7D9hgnLGecGZKiPBgnLfzLMynCbAEhYnbXiKjglDBKWNFcBCY5IgYSJ9phpgpPeIKH2kKkiE1ZrookMrRgQYaXW+4vATBtEqHw5AF3gDUIQYSViUFmBbQoQYWVOv/8LKqCDCBUvOGQKWvMhQnKxoLqgqlqI0Lk7K7igyfR5CKFgDURYoRDGr6Bz/vPMNND9pM+zWhyJhBU7PEXw6QIirEhSJiPqM6zczpv8HepdvM0VFIx6mhMwecWvJdojpoq6a9O91JgjqIgPJCxlabdBewjEEMGplsB6BZiwYvs2ciSq1KXBBYK9Fgx5qTLXBj8Ivn3GQFilYNQexjAQlrw6OCdDS64pe1rGZqdi8bLctdpAe+BYGe8iN1Z9VSXRbWwbf4LaREtzkJmwEls3MGOBIaxCMMPWS2qr1Z/af0JXH7aGf2tHSclrTLdW6wErYV/xqkO7znZvBXvjUJkRzwinmkp3WO4xphuoNsySrvxQhJRBWM7oKfLmIKTjQLt8q4a0a0TZijOOaCd6vHtLv0zpKMKFshQXpVVZglNNytVWNDezlzI8xynNw5TqudfWjoUvibaJHHfPsWIVw5TKx/Sgrac6+/EGx2Wf6wU9SEOvkBOmj5+D6/zreMN2C6ZqeaBfIutOeFE9LnbtFNUxpjrrChJeNU+bnk5Yp2QXU6wJfRFe1H8Zp43pSQptv96k8coV7iqxO0p+teqkb41kxkHdziafm7d0OGd/coWSJvxTuzWYj+PFaNNsHNeT/eyjez5//XGftt3Z8uq+19yM0kU8nr+0WqxLRhH6D246kids3IOQAAAAAElFTkSuQmCC"
                         alt="avatar"/>
                    <div className={styles.dialogInfo}>
                        <div className={styles.dialogName}>
                            <span>{props.name}</span>
                        </div>
                        <div className={styles.dialogLastMessage}>
                            <span>{props.lastMessage}</span>
                        </div>
                    </div>
                </div>
            </NavLink>
        </li>
    );
};

export default DialogItem;