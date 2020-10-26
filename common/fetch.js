import _ from 'lodash';
const BASE_URL = "https://wxyc.rcdata.com.cn";

export const fetch = async (url = '', data = {}, method = 'GET', header = {}) => {
	if (url.includes('?')) {
		url = `${url}&t=${Date.now()}`;
	} else {
		url = `${url}?t=${Date.now()}`;
	}
	
	header.token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYmQzNmVjY2Y4MzQ0ZjA5YTU1ZGM0ZTY3NWI0MTg0MiIsImV4cCI6MTYwMzY4MjM2OCwiaWF0IjoxNjAzNjgyMzY4LCJpc3MiOiJKQU1FUyJ9.AFFhy04laea544ByR3pEyy7So8YGcek_YEZJjx3ap5npcx02mDT4o50ZCtoKjkp1Uar8ea8A4ZdW7T5ayb-niw'
	
	let configure = {
		method: method,
		url: url.startsWith('http') ? url : BASE_URL + url,
		header:header,
		data: data,
	};

	try {
		const response = await uni.request(configure);
		if (response[0]) {
			return Promise.reject(response[0].errMsg);
		}

		if (response[1] && response[1].statusCode === 200) {
			const res = _.get(response, '[1].data', {}) || {};

			if (res.code !== 200) {
				if (res.code === 401) {
					uni.showModal({
						title: '提示',
						content: '未登录或超时退出',
						showCancel: false,
						success: (res) => {
							// fixme:跳转到登录页
							uni.switchTab({
								url: '/pages/my/my',
							});
						}
					});
					return Promise.reject('未登录或超时退出');
				}
			}
			return res;
		}

	} catch (e) {
		return e.response || e;
	}
}
