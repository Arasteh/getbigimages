// ==UserScript==
// @name         Canonicalize images addresses
// @namespace    https://arasteh.studio/get-big-images/
// @version      0.1
// @description  Load images in the highest resolution available.
// @author       @ebraminio @arasteh
// @match        https://images1.bonhams.com/image*
// @match        https://dkstatics-public.digikala.com/*
// @match        https://www.christies.com/img/*
// @match        https://ipm.ssaa.ir/Storage*
// @match        https://m.media-amazon.com/images/*
// @match        https://images-eu.ssl-images-amazon.com/images/*
// @match        https://images-na.ssl-images-amazon.com/images/*
// @match        https://www.filimo.com/shot/wp-content/uploads/*
// @match        https://img.freepik.com/free-*
// @match        https://img.freepik.com/premium-*
// @match        https://statics.basalam.com/public*
// @match        https://sabakhabar.ir/wp-content*
// @match        https://cdn.isna.ir/d*
// @match        http://arthibition.net/uploadCore*
// @match        https://media.mehrnews.com/d*
// @match        https://idc0-cdn0.khamenei.ir/ndata*
// @match        https://img9.irna.ir/d*
// @match        https://images.metmuseum.org/CRDImages*
// @match        https://techcrunch.com/wp-content*
// @match        https://lh1.googleusercontent.com/*
// @match        https://lh2.googleusercontent.com/*
// @match        https://lh3.googleusercontent.com/*
// @match        https://lh4.googleusercontent.com/*
// @match        https://lh5.googleusercontent.com/*
// @match        https://lh6.googleusercontent.com/*
// @match        https://lh7.googleusercontent.com/*
// @match        https://lh8.googleusercontent.com/*
// @match        https://lh9.googleusercontent.com/*
// @match        https://yt1.googleusercontent.com/*
// @match        https://yt2.googleusercontent.com/*
// @match        https://yt3.googleusercontent.com/*
// @match        https://yt4.googleusercontent.com/*
// @match        https://yt5.googleusercontent.com/*
// @match        https://yt6.googleusercontent.com/*
// @match        https://yt7.googleusercontent.com/*
// @match        https://yt8.googleusercontent.com/*
// @match        https://yt9.googleusercontent.com/*
// @match        https://play-lh.googleusercontent.com/*
// @match        https://images.unsplash.com/*
// @match        https://thumbs.dreamstime.com/*
// @match        https://news.ut.ac.ir/images*
// @match        https://pentagram-production.imgix.net/*
// @match        https://imageio.forbes.com/*
// @match        https://cdn.dribbble.com/*
// @match        https://image.cnbcfm.com/*
// @match        https://digitalhub.fifa.com/*
// @match        https://www.fractal-design.com/*
// @match        https://media.newyorker.com/*
// @match        static.vecteezy.com/*
// @match        https://images.vestiairecollective.com/cdn-cgi*
// @match        https://s.cafebazaar.ir/images*
// @match        https://media.farsnews.ir/*
// @match        https://static.digiato.com/*
// @match        https://is1-ssl.mzstatic.com/image*
// @match        https://is2-ssl.mzstatic.com/image*
// @match        https://is3-ssl.mzstatic.com/image*
// @match        https://is4-ssl.mzstatic.com/image*
// @match        https://www.beyondnow.com/*
// @match        https://smallimg.pngkey.com/*
// @match        https://static.toiimg.com/*
// @match        https://images.squarespace-cdn.com/content*
// @match        https://media.cinemapress.ir/*
// @match        https://cdnfa.com/*
// @match        https://idebook.ir/*
// @match        https://images.adsttc.com/media*
// @match        https://image.shutterstock.com/image*
// @match        https://cdn.theatlantic.com/thumbor*
// @match        https://yassavoli.com/uploads*
// @match        https://static01.nyt.com/images*
// @match        https://images.theconversation.com/files*
// @match        https://mediaproxy.salon.com/width*
// @match        https://galleryinfo.ir/Images*
// @match        https://towhidshop.org/uploads/image*
// @match        https://www.posterfortomorrow.org/images*
// @match        https://decodl.net/api/search-service/image/*
// @match        https://wearecollins.imgix.net/*
// @match        https://paragonn-cdn.nyc3.cdn.digitaloceanspaces.com/*
// @match        https://s3.amazonaws.com/medias.site.lg2.com/*
// @match        https://shop.matchstic.com/cdn*
// @match        https://img.semafor.com/*
// @match        https://prod-lippincott.imgix.net/*
// @match        https://wp.cghnyc.com/media*
// @match        https://dstudio.imgix.net/*
// @match        https://images.prismic.io/*
// @match        https://media-cldnry.s-nbcnews.com/image*
// @match        https://pbs.twimg.com/media*
// @match        https://media.isna.ir/content*
// @match        https://static.filmnet.ir/images*
// @match        https://asset.tamashakhoneh.ir/*
// @match        https://asset.tmk.ir/*
// @match        https://media.pitchfork.com/photos*
// @match        https://i.kinja-img.com/image*
// @match        https://media.musalla.ir/d*
// @match        https://static.billboard.com/files*
// @match        https://static.cdn.asset.filimo.com/*
// @match        https://www.jiomart.com/images*
// @match        https://cdn.snapp.express/*
// @match        https://www.datocms-assets.com/*
// @match        https://sc04.alicdn.com/*
// @match        https://media.wnyc.org/i/*
// @match        https://i.etsystatic.com/*
// @match        https://ehfel.eurohandball.com/*
// @match        https://ehfec.eurohandball.com/*
// @match        https://ehfcl.eurohandball.com/*
// @match        https://www.eurohandball.com/*
// @match        https://yac.eurohandball.com/*
// @match        https://ehfeuro.eurohandball.com/*
// @match        https://shop.nufc.co.uk/cdn*
// @match        https://static.neshanmap.ir/*
// @match        https://cdn.shenoto.com/*
// @match        https://cdn-arch.shenoto.com/*
// @match        https://yt1.ggpht.com/*
// @match        https://yt2.ggpht.com/*
// @match        https://yt3.ggpht.com/*
// @match        https://static.namava.ir/Content*
// @match        https://static.esam.ir/*
// @match        https://static.digiato.com/*
// @match        https://upload.wikimedia.org/*
// @match        https://media.wired.com/*
// @match        https://media.cnn.com/*
// @match        https://megaphone.imgix.net/*
// @match        https://i.natgeofe.com/*
// @match        https://www.nps.gov/common*
// @match        https://ids.si.edu/ids*
// @match        https://render.myfonts.net/fonts*
// @match        https://sig.monotype.com/render*
// @match        https://saffron.imgix.net/*
// @match        https://live.staticflickr.com/*
// @match        https://media.discordapp.net/attachments*
// @match        https://assets1.cbsnewsstatic.com/*
// @match        https://assets.the-afc.com/*
// @match        https://sothebys-com.brightspotcdn.com/*
// @match        https://sothebys-md.brightspotcdn.com/*
// @match        https://fotografia.islamoriente.com/sites*
// @match        https://media.khabaronline.ir/d*
// @match        https://ketabnak.com/*
// @match        https://i.insider.com/*
// @match        https://agakhanmuseum.org/dataset-images*
// @match        https://www.agakhanmuseum.org/dataset-images*
// @match        https://media.atiyeonline.ir/*
// @match        https://thesoundofvinyl.com/cdn*
// @match        https://cdn.mos.cms.futurecdn.net/*
// @match        https://media.tehrantimes.com/d*
// @match        https://image.invaluable.com/housePhotos*
// @match        https://img.tebyan.net/big*
// @match        https://media.chtn.ir/d*
// @match        https://img1.bonhams.com/image*
// @include      /^https?://.*\/wp-content\/.*$/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const destination = (function normalizer(url) {
        switch (url.host) {
            case 'images1.bonhams.com':
                [...url.searchParams].filter(x => x[0] !== 'src').forEach(x => url.searchParams.delete(x[0]));
                return url.toString();
            case 'm.media-amazon.com':
            case 'images-eu.ssl-images-amazon.com':
            case 'images-na.ssl-images-amazon.com':
                return url.href.replace(/(@+)[^@]+\.|\._.+_\./, '$1.');
            case 'img.freepik.com':
                return url.origin + url.pathname + '?w=2000';
            case 'statics.basalam.com':
                return url.href.replace(/_.+\.jpg/, '');
            case 'cdn.isna.ir':
            case 'media.mehrnews.com':
            case 'img9.irna.ir':
            case 'media.cinemapress.ir':
            case 'media.isna.ir':
            case 'media.musalla.ir':
            case 'media.khabaronline.ir':
            case 'media.atiyeonline.ir':
            case 'media.tehrantimes.com':
            case 'media.chtn.ir':
                return url.href.replace(/\/[1-3]\/([^\/]+$)/, '/4/$1').replace(/\/[1-3]$/, '/4');
            case 'arthibition.net':
                return url.href.replace(/\/(intro|medium)\//, '/');
            case 'idc0-cdn0.khamenei.ir':
                return url.href.replace(/\/[AC]\//, '/B/');
            case 'images.metmuseum.org':
                return url.href.replace(/\/web-additional\//, '/original/');
            case 'thumbs.dreamstime.com':
                return url.href.replace(/\/[bsmtxl]\//, '/z/');
            case 'news.ut.ac.ir':
                return url.href.replace(/\/gallery-thumb\//, '/gallery-big/');
            case 'www.fractal-design.com':
                return url.href.replace(/-\d+x\d+\./, '.');
            case 'media.newyorker.com':
                return url.href.replace(/\/master\/w_.+\/|\/\d+:\d+\/w_.+\//, '/');
            case 'static.vecteezy.com':
                return url.href.replace(/\/large_2x\/|\/large\/|\/small_2x\/|\/small\/|\/non_2x\/|\/non\//, '/original/').replace(/\/thumbnails\//, '/previews/');
            case 'images.vestiairecollective.com':
                return url.href.replace(/\/cdn-cgi\/image\/w=.+\/produit\//, '/produit/');
            case 's.cafebazaar.ir':
                return url.origin + url.pathname.replace(/_128x128./, '_512x512.') + '?x-img=v1/format,type_png,lossless_true';
            case 'media.farsnews.ir':
                return url.href.replace(/_PhotoX\.|_PhotoL\./, '_PhotoT.');
            case 'static.digiato.com':
                return url.href.replace(/-\d+x\d+\.|\-scaled\./, '.');
            case 'cdn.dribbble.com':
                return url.href.replace(/\/normal\//, '/original/');
            case 'smallimg.pngkey.com':
                return url.origin.replace(/smallimg.pngkey/, 'pngkey') + url.pathname.replace(/\/png\/small\//, '/png/full/');
            case 'static.toiimg.com':
                return url.href.replace(/,.+\./, '.').replace(/\/thumb\//, '/photo/');
            case 'cdnfa.com':
                return url.href.replace(/\/thumb\/|\/normal\//, '/');
            case 'idebook.ir':
                return url.href.replace(/\/small\/small_/, '/');
            case 'images.adsttc.com':
                return url.href.replace(/\/(thumb|small|medium)_/, '/large_');
            case 'shutterstock.com':
                return url.origin + url.pathname.replace(/\/image-vector\//, '/z/').replace(/-600w-|-290w-/, '-');
            case 'cdn.theatlantic.com':
                return url.href.replace(/thumbor\/.+\/media\//, 'media/');
            case 'mediaproxy.salon.com':
                return url.origin.replace(/proxy/, '') + url.pathname.replace(/width\/\d+\/https:\/\/media.salon.com\//, '');
            case 'galleryinfo.ir':
                return url.href.replace(/\/GalleryT_/, '/GalleryB_').replace(/(Event_\d+)(\.jpg|\.png)/, '$1_Big$2');
            case 'www.posterfortomorrow.org':
                return url.href.replace(/thumbs\/entries\/\d+x\d+\//, 'entries/');
            case 'paragonn-cdn.nyc3.cdn.digitaloceanspaces.com':
            case 's3.amazonaws.com':
                return url.href.replace(/\/_\d+x\d+_crop_.+\//, '/');
            case 'wp.cghnyc.com':
                return url.href.replace(/-\d+x\d+\.|\-scaled\./, '.');
            case 'media-cldnry.s-nbcnews.com':
                return url.href.replace(/\/upload\/.+\/rockcms\//, '/upload/rockcms/');
            case 'pbs.twimg.com':
                return url.origin + url.pathname + '?format=jpg&name=orig';
            case 'media.pitchfork.com':
            case 'media.wired.com':
                return url.href.replace(/\/\d:\d\/.+,c_limit\//, '/');
            case 'i.kinja-img.com':
                return url.href.replace(/\/upload\/.+\//, '/upload/');
            case 'static.billboard.com':
                return url.href.replace(/-\d+x\d+\.|\-scaled\./, '.')
            case 'cdn.snapp.express':
                return url.href.replace(/\d+x\d+\/cdn/, 'cdn')
            case 'sc04.alicdn.com':
                return url.href.replace(/_\d+x\d+\..+/, '')
            case 'media.wnyc.org':
                return url.href.replace(/i\/\d+\//, 'i/8000/')
            case 'i.etsystatic.com':
                return url.href.replace(/il_.+xN\.|il_.+x\d+\./, 'il_fullxfull.')
            case 'shop.nufc.co.uk':
                return url.href.replace(/_\d+x./, '.')
            case 'static.neshanmap.ir':
                return url.href.replace(/_Thumbnail--/, '--')
            case 'cdn.shenoto.com':
            case 'cdn-arch.shenoto.com':
                return url.href.replace(/\/\d+.jpg/, '/original.jpg')
            case 'static.esam.ir':
                return url.href.replace(/_thsm.|_th./, '.')
            case 'static.digiato.com':
                return url.href.replace(/.jpg.webp/, '.jpg')
            case 'upload.wikimedia.org':
                return url.href.replace(/thumb\//, '').replace(/\/\d+px-.+$/, '')
            case 'ids.si.edu':
                return url.href.replace(/max=\d+/, '')
            case 'render.myfonts.net':
            case 'sig.monotype.com':
                return url.href.replace(/&rs=\d+&/, '&rs=256&').replace(/&w=\d+&/, '&w=4000&')
            case 'live.staticflickr.com':
                return url.origin + url.pathname.replace(/_[c|m|n|q|s|t|w|z]./, '_b.');
            case 'assets1.cbsnewsstatic.com':
                return url.href.replace(/\/thumbnail\/\d+x\d+\//, '/')
            case 'sothebys-com.brightspotcdn.com':
            case 'sothebys-md.brightspotcdn.com':
                return unescape(url.search.replace(/\?url=/, ''))
            case 'fotografia.islamoriente.com':
                return url.href.replace(/\/styles\/236_all\/public\//, '/')
            case 'ketabnak.com':
                return url.href.replace(/\/thumb\/\d+x\d+\//, '/')
            case 'agakhanmuseum.org':
            case 'www.agakhanmuseum.org':
                return url.href.replace(/\/500$/, '')
            case 'cdn.mos.cms.futurecdn.net':
                return url.href.replace(/-\d+-\d+.|-\d+./, '.').replace(/.webp$/, '')
            case 'image.invaluable.com':
                return url.href.replace(/(\d).jpg$/, '$1_original.jpg')
            case 'img1.bonhams.com':
                return url.href.replace(/(.jpg).+$/, '$1')
            //case 'www.mizanonline.ir':
            //    return url.href.replace(/_albums/, '').replace(/\/thumbnails\/thm_/, '/')
            //case 'pbs.twimg.com/profile_images':
            //    return url.origin + url.pathname.replace(/_\d+x\d+.jpg/, '.jpg')
//---APP STORE---
            case 'is1-ssl.mzstatic.com':
            case 'is2-ssl.mzstatic.com':
            case 'is3-ssl.mzstatic.com':
            case 'is4-ssl.mzstatic.com':
                return url.origin + url.pathname.replace(/\.(png|jpg)\/\d+x0w.webp/, '.$1/8000x0w.$1');
//---TRIM EVERYTHING AFTER '?'---
            case 'dkstatics-public.digikala.com':
            case 'www.christies.com':
            case 'ipm.ssaa.ir':
            case 'images.unsplash.com':
            case 'imageio.forbes.com':
            case 'image.cnbcfm.com':
            case 'digitalhub.fifa.com':
            case 'www.beyondnow.com':
            case 'images.squarespace-cdn.com':
            case 'yassavoli.com':
            case 'nyt.com':
            case 'static01.nyt.com':
            case 'images.theconversation.com':
            case 'towhidshop.org':
            case 'shop.matchstic.com':
            case 'img.semafor.com':
            case 'wearecollins.imgix.net':
            case 'pentagram-production.imgix.net':
            case 'prod-lippincott.imgix.net':
            case 'dstudio.imgix.net':
            case 'megaphone.imgix.net':
            case 'saffron.imgix.net':
            case 'images.prismic.io':
            case 'static.filmnet.ir':
            case 'asset.tamashakhoneh.ir':
            case 'asset.tmk.ir':
            case 'static.cdn.asset.filimo.com':
            case 'www.jiomart.com':
            case 'jiomart.com':
            case 'www.datocms-assets.com':
            case 'ehfel.eurohandball.com':
            case 'ehfec.eurohandball.com':
            case 'ehfcl.eurohandball.com':
            case 'www.eurohandball.com':
            case 'yac.eurohandball.com':
            case 'ehfeuro.eurohandball.com':
            case 'static.namava.ir':
            case 'i.natgeofe.com':
            case 'www.nps.gov':
            case 'media.discordapp.net':
            case 'assets.the-afc.com':
            case 'i.insider.com':
            case 'thesoundofvinyl.com':
            case 'img.tebyan.net':
            //case 'media.cnn.com':
                return url.origin + url.pathname;
//---GOOGLE---
            case 'lh1.googleusercontent.com':
            case 'lh2.googleusercontent.com':
            case 'lh3.googleusercontent.com':
            case 'lh4.googleusercontent.com':
            case 'lh5.googleusercontent.com':
            case 'lh6.googleusercontent.com':
            case 'lh7.googleusercontent.com':
            case 'lh8.googleusercontent.com':
            case 'lh9.googleusercontent.com':
            case 'play-lh.googleusercontent.com':
            case 'yt1.googleusercontent.com':
            case 'yt2.googleusercontent.com':
            case 'yt3.googleusercontent.com':
            case 'yt4.googleusercontent.com':
            case 'yt5.googleusercontent.com':
            case 'yt6.googleusercontent.com':
            case 'yt7.googleusercontent.com':
            case 'yt8.googleusercontent.com':
            case 'yt9.googleusercontent.com':
            case 'yt1.ggpht.com':
            case 'yt2.ggpht.com':
            case 'yt3.ggpht.com':
                return url.origin + url.pathname.replace(/=.+/, '=s8000');
//---DECODL---
            case 'decodl.net':
                const pathname = decodeURIComponent(url.pathname);
                if (pathname.includes('.shutterstock.com'))
                    return url.toString().replace(/%2Fimage-vector%2F/, '%2Fz%2F').replace(/-600w-|-290w-/, '-');
                if (pathname.includes('.ftcdn.net'))
                    return url.toString();
                return pathname.includes('/api/search-service/image/')
                     ? normalizer(new URL(pathname.split('/api/search-service/image/')[1]))
                     : url.toString();
//---WORDPRESS SITES---
            default:
                return url.pathname.includes('/wp-content/')
                     ? url.origin + url.pathname.replace(/-\d+x\d+\.|\-scaled\./, '.')
                     : url.toString();
        }
    }(new URL(location.href)));
    if (location.href !== destination) location.href = destination;
}());
