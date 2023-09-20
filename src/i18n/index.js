import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          backgroundQr: 'QR code with background',
          qrContent: 'Content:',
          qrDownload: 'Download:',
          qrParameter: 'Parameter:',
          errorRate: 'Fix Rate',
          icon: 'Icon',
          iconSource: 'Icon Source',
          iconZoom: 'Icon Zoom',
          backgroundImg: 'Background',
          infoStyle: 'Information Style',
          infoZoom: 'Information Zoom',
          infoOpactiy: 'Information Transparency',
          infoDark: 'Information Dark',
          infoLight: 'Information Light',
          tackStyle: 'Anchor Style',
          tackColor: 'Anchor Color',
          uploadImg: 'Upload Image',
          uoloadQr: 'Upload QR code to identify the content of the QR code',
          custom: 'Custom',
          none: 'None',
          weixin: 'WeChat',
          weixins: 'WeChat-Small',
          weixinPay: 'WeChat Pay',
          ali: 'Alipay',
          round: 'Round',
          rectangle: 'Rectangle',
          star: 'Star',
        }
      },
      zh: {
        translation: {
          backgroundQr: '背景二维码',
          qrContent: '二维码内容：',
          qrDownload: '二维码下载：',
          qrParameter: '二维码参数：',
          errorRate: '容错率',
          icon: '图标',
          iconSource: '图标源',
          iconZoom: '图标缩放',
          backgroundImg: '背景图片',
          infoStyle: '信息点样式',
          infoZoom: '信息点缩放',
          infoOpactiy: '信息点透明度',
          infoDark: '信息点深色',
          infoLight: '信息点浅色',
          tackStyle: '定位点样式',
          tackColor: '定位点颜色',
          uploadImg: '上传图片',
          uoloadQr: '上传二维码，识别二维码内容',
          custom: '自定义',
          none: '无',
          weixin: '微信',
          weixins: '微信-小',
          weixinPay: '微信支付',
          ali: '支付宝',
          round: '圆形',
          rectangle: '矩形',
          star: '星星',
        }
      }
    }
  });
export default i18n;