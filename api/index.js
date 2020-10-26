import {
	fetch
} from '../common/fetch.js';


export const getBannerList = () => fetch('https://rcdata.com.cn/xmofficial/banner/bannerList', {}, 'GET');

export const login = (data) => fetch('/contact/getQuestionInfoByQstnType', data, 'POST', {
	 "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
});
