/**
  *	参数配置文件
  *	option：头部配置
  * params：数据请求配置
  */

import serverapi from './serverapi.js';
export default {
	home:{
		 option:[
                    {
                        title:'推荐',
                        topid:'',
                    },
                    {
                    	title:'视频',
                    	topid:410,
                    },
                    {
                        title:'代理',
                        topid:288,
                    },
                    {
                        title:'药品',
                        topid:4,
                    },
                    {
                        title:'保健食品',
                        topid:5,
                    },
                    {
                        title:'营养食品',
                        topid:6,
                    },
                    {
                        title:'原料药',
                        topid:7,
                    },
                    {
                        title:'中间体',
                        topid:8,
                    },
                    {
                        title:'药用辅料',
                        topid:9,
                    },
                    {
                        title:'动植物提取物',
                        topid:10,
                    },
                    {
                        title:'中药材',
                        topid:11,
                    },
                    {
                        title:'中药饮片',
                        topid:12,
                    },
                    {
                        title:'器械',
                        topid:13,
                    },
                    {
                        title:'耗材',
                        topid:14,
                    },
                    {
                        title:'制药设备',
                        topid:15,
                    },
                    {
                        title:'包装材料',
                        topid:16,
                    },
                    {
                        title:'孕婴用品',
                        topid:17,
                    },
                    {
                        title:'计生用品',
                        topid:18,
                    },
                    {
                        title:'消毒用品',
                        topid:19,
                    },
                    {
                        title:'美容护肤',
                        topid:20,
                    },
                    {
                    	title:'参展动态',
                    	topid:179,
                    },
                    {
                    	title:'展会经济',
                    	topid:180
                    },
                    {
                    	title:'参展百科',
                    	topid:181
                    },
                    {
                    	title:'企业专访',
                    	topid:182
                    },
                    {
                    	title:'高端对话',
                    	topid:183
                    },
                    {
                    	title:'政府',
                    	topid:135
                    },
                    {
                    	title:'政策',
                    	topid:141
                    },
                    {
                    	title:'产经',
                    	topid:151
                    },
                    {
                    	title:'终端',
                    	topid:160
                    },
                    {
                    	title:'创新',
                    	topid:167
                    },
                    {
                    	title:'公告',
                    	topid:329
                    },
                    {
                        title:'养生',
                        topid:337,
                    },
                    {
                        title:'老年',
                        topid:338,
                    },
                    {
                        title:'心理',
                        topid:341,
                    },
                    {
                        title:'母婴',
                        topid:362,
                    },
                    {
                        title:'用药',
                        topid:383,
                    },
                    {
                        title:'疾病',
                        topid:390,
                    },
                    {
                        title:'饮食',
                        topid:404,
                    }
                ],
            params:[
                    {
                        url:serverapi.recommend,
                        type:"recommend",
                        option:{params:{}}
                    },
                    {
                        url:serverapi.video,
                        type:14,
                        option:{params:{}}
                    },
                    {
                        url:serverapi.agency,
                        type:23,
                        option:{params:{}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:4}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:5}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:6}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:7}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:8}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:9}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:10}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:11}}
                    },
                     {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:12}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:13}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:14}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:15}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:16}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:17}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:18}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:19}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:20}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:179}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:180}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:181}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:182}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:183}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:135}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:141}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:151}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:160}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:167}}
                    },
					{
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:171}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:337}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:338}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:341}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:362}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:383}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:390}}
                    },
                    {
                        url:serverapi.article,
                        type:21,
                        option:{params:{catid:404}}
                    },
                   
                ]    
	},
    product:{
        option:  [
                    {
                        title:'全部',
                        topid:''
                    },
                    {
                        title:'药品',
                        topid:4,
                    },
                    {
                        title:'保健食品',
                        topid:5,
                    },
                    {
                        title:'营养食品',
                        topid:6,
                    },
                    {
                        title:'原料药',
                        topid:7,
                    },
                    {
                        title:'中间体',
                        topid:8,
                    },
                    {
                        title:'药用辅料',
                        topid:9,
                    },
                    {
                        title:'动植物提取物',
                        topid:10,
                    },
                    {
                        title:'中药材',
                        topid:11,
                    },
                    {
                        title:'中药饮片',
                        topid:12,
                    },
                    {
                        title:'器械',
                        topid:13,
                    },
                    {
                        title:'耗材',
                        topid:14,
                    },
                    {
                        title:'制药设备',
                        topid:15,
                    },
                    {
                        title:'包装材料',
                        topid:16,
                    },
                    {
                        title:'孕婴用品',
                        topid:17,
                    },
                    {
                        title:'计生用品',
                        topid:18,
                    },
                    {
                        title:'消毒用品',
                        topid:19,
                    },
                    {
                        title:'美容护肤',
                        topid:20,
                    }
                 ],
        params:[
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:4}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:5}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:6}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:7}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:8}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:9}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:10}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:11}}
                    },
                     {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:12}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:13}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:14}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:15}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:16}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:17}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:18}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:19}}
                    },
                    {
                        url:serverapi.investment,
                        type:22,
                        option:{params:{catid:20}}
                    },
        ]         
                    
    }
}