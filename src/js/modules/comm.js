/**
 * @description: comm
 * @author: GX-F2E
 * @version: V1
 * @update: 15/9/7
 */

define(function (require, exports, module) {
    var $ = jQuery = require("jquery"),
        gxdialog = require("gxdialog");

    // 设置弹出层颜色
    $.gxDialog.defaults.background = '#000';

    var payFun = function(){
        $('.particulars-btn').on('click',function(){
            $.gxDialog({
                title: '',
                width: 500,
                info: $('.J_payBox')
            });
        });
        $('.gx-back').on('click', function(){
            $.gxDialog.close();
        })

    };
    payFun();
    //请先进行身份认证
    var identity = function(){
        $('.particulars-btn').on('click',function(){
            $.gxDialog({
                title: '',
                width: 400,
                info: $('.J_identity-pop')
            });
        });
        $('.gx-back').on('click', function(){
            $.gxDialog.close();
        })

    };
    identity();


    //module.exports = doSomething;
});
