
<template>
    <div class="container">
        <div class="player">
            <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)">
            </video-player>
        </div>
    </div>
</template>
 
<script>
    import {
        videoPlayer
    } from 'vue-video-player';
    export default {
        name: 'videoplayer1',
        data() {
            return {
                playerOptions: {
                    //        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        // type: "video/mp4",
                        src: this.src
                        //src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
                    }],
                    //poster: "poster.jpg", //你的封面地址
                    poster: this.poster,
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    //        controlBar: {
                    //          timeDivider: true,
                    //          durationDisplay: true,
                    //          remainingTimeDisplay: false,
                    //          fullscreenToggle: true  //全屏按钮
                    //        }
                }
            }
        },
        props: {
            src: String,
            poster: String
        },
        components: {
            videoPlayer
        },
        methods: {
            onPlayerPlay(player) {
                for (let i = 0; i < window.videoPlayers.length; i++) {
                    if (this.player == window.videoPlayers[i])
                        console.log(i)
                    else
                        window.videoPlayers[i].pause()
                }
            },
            onPlayerPause(player) {
                // alert("pause");
            },
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
    
        },
        mounted() {
            const _this = this
            //console.log(this.$refs.videoPlayer.player)
            window.videoPlayers.push(_this.$refs.videoPlayer.player)
        }
    }
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .container {
        background-color: #efefef;
        min-height: 100%;
        .video-js .vjs-big-play-button {
            font-size: 3em;
            line-height: 1.5em;
            height: 1.5em;
            width: 1.5em;
            border-radius: 50%;
            left: 50%;
            top: 50%;
            border: none;
            transform: translate(-50%,-50%);
        }
    }
</style>