/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9baa37aa101e45f5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ca82927375b00e55e48237a2b463eb65',

  PROVINCE: '北京',
  CITY: '昌平区',

  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true
  }
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '田墩墩',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oD81G6s5BzHkNw3uZplKjhsLN0dI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'jSdEnRAE2kB6Ma7Uof76oXDk3MFca5xD-wFfbkr8dYM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-09',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1993', date: '02-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '墩墩', year: '1993', date: '03-09',
        },
        {
          type: '节日', name: '领证纪念日', year: '2019', date: '03-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
       // { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2019-08-19' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'jSdEnRAE2kB6Ma7Uof76oXDk3MFca5xD-wFfbkr8dYM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oD81G6s5BzHkNw3uZplKjhsLN0dI',
    }
  ],

}

module.exports = USER_CONFIG

