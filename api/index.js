import {
	fetch
} from '../common/fetch.js';


export const getFlowList =(data)=>fetch('/follow/list',data,'POST',{
	 "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
});

export const login = (data) => fetch('/contact/getQuestionInfoByQstnType', data, 'POST', {
	 "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
});
