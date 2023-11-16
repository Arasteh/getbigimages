// ==UserScript==
// @name         Canonicalize images addresses
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Load images in the highest resolution available.
// @author       @ebraminio @arasteh
// @match        https://images1.bonhams.com/image*
// @match        https://dkstatics-public.digikala.com/*
// @match        https://www.christies.com/img/*
// @match        https://ipm.ssaa.ir/Storage*
// @match        https://m.media-amazon.com/images/*
// @match        https://images-eu.ssl-images-amazon.com/images/*
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
                return url.origin + url.pathname.replace(/(@+)[^@]+\.|\._.+_\./, '$1.');
            case 'img.freepik.com':
                return url.origin + url.pathname + '?w=2000';
            case 'statics.basalam.com':
                return url.origin + url.pathname.replace(/_.+\.jpg/, '');
            case 'cdn.isna.ir':
            case 'media.mehrnews.com':
            case 'img9.irna.ir':
            case 'media.cinemapress.ir':
            case 'media.isna.ir':
                return url.origin + url.pathname.replace(/\/[1-3]\/([^\/]+$)/, '/4/$1');
            case 'arthibition.net':
                return url.origin + url.pathname.replace(/\/(intro|medium)\//, '/');
            case 'idc0-cdn0.khamenei.ir':
                return url.origin + url.pathname.replace(/\/[AC]\//, '/B/');
            case 'images.metmuseum.org':
                return url.origin + url.pathname.replace(/\/web-additional\//, '/original/');
            case 'thumbs.dreamstime.com':
                return url.origin + url.pathname.replace(/\/[bsmtxl]\//, '/z/');
            case 'news.ut.ac.ir':
                return url.origin + url.pathname.replace(/\/gallery-thumb\//, '/gallery-big/');
            case 'www.fractal-design.com':
                return url.origin + url.pathname.replace(/-\d+x\d+\./, '.');
            case 'media.newyorker.com':
                return url.origin + url.pathname.replace(/\/master\/w_.+\/|\/\d+:\d+\/w_.+\//, '/');
            case 'static.vecteezy.com':
                return url.origin + url.pathname.replace(/\/large_2x\/|\/large\/|\/small_2x\/|\/small\/|\/non_2x\/|\/non\//, '/original/').replace(/\/thumbnails\//, '/previews/');
            case 'images.vestiairecollective.com':
                return url.origin + url.pathname.replace(/\/cdn-cgi\/image\/w=.+\/produit\//, '/produit/');
            case 's.cafebazaar.ir':
                return url.origin + url.pathname + '?x-img=v1/format,type_png,lossless_true';
            case 'media.farsnews.ir':
                return url.origin + url.pathname.replace(/_PhotoX\./, '_PhotoT.');
            case 'static.digiato.com':
                return url.origin + url.pathname.replace(/-\d+x\d+\.|\-scaled\./, '.');
            case 'cdn.dribbble.com':
                return url.origin + url.pathname.replace(/\/normal\//, '/original/');
            case 'smallimg.pngkey.com':
                return url.origin.replace(/smallimg.pngkey/, 'pngkey') + url.pathname.replace(/\/png\/small\//, '/png/full/');
            case 'static.toiimg.com':
                return url.origin + url.pathname.replace(/,.+\./, '.').replace(/\/thumb\//, '/photo/');
            case 'cdnfa.com':
                return url.origin + url.pathname.replace(/\/thumb\/|\/normal\//, '/');
            case 'idebook.ir':
                return url.origin + url.pathname.replace(/\/small\/small_/, '/');
            case 'images.adsttc.com':
                return url.origin + url.pathname.replace(/\/(thumb|small|medium)_/, '/large_');
            case 'shutterstock.com':
                return url.origin + url.pathname.replace(/\/image-vector\//, '/z/').replace(/-600w-|-290w-/, '-');
            case 'cdn.theatlantic.com':
                return url.origin + url.pathname.replace(/thumbor\/.+\/media\//, 'media/');
            case 'mediaproxy.salon.com':
                return url.origin.replace(/proxy/, '') + url.pathname.replace(/width\/\d+\/https:\/\/media.salon.com\//, '');
            case 'galleryinfo.ir':
                return url.origin + url.pathname.replace(/\/GalleryT_/, '/GalleryB_');
            case 'www.posterfortomorrow.org':
                return url.origin + url.pathname.replace(/thumbs\/entries\/\d+x\d+\//, 'entries/');
            case 'paragonn-cdn.nyc3.cdn.digitaloceanspaces.com':
            case 's3.amazonaws.com':
                return url.origin + url.pathname.replace(/\/_\d+x\d+_crop_.+\//, '/');
            case 'wp.cghnyc.com':
                return url.origin + url.pathname.replace(/-\d+x\d+\.|\-scaled\./, '.');
            case 'media-cldnry.s-nbcnews.com':
                return url.origin + url.pathname.replace(/\/upload\/.+\/rockcms\//, '/upload/rockcms/');
            case 'pbs.twimg.com':
                return url.origin + url.pathname + '?format=jpg&name=orig';
            case 'media.pitchfork.com':
                return url.origin + url.pathname.replace(/\/\d:\d\/.+,c_limit\//, '/');
            case 'i.kinja-img.com':
                return url.origin + url.pathname.replace(/\/upload\/.+\//, '/upload/');
//---App Store---
            case 'is1-ssl.mzstatic.com':
            case 'is2-ssl.mzstatic.com':
            case 'is3-ssl.mzstatic.com':
            case 'is4-ssl.mzstatic.com':
                return url.origin + url.pathname.replace(/\.(png|jpg)\/\d+x0w.webp/, '.$1/8000x0w.$1');
//---Trim everything after '?'---
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
            case 'images.theconversation.com':
            case 'towhidshop.org':
            case 'shop.matchstic.com':
            case 'img.semafor.com':
            case 'wearecollins.imgix.net':
            case 'pentagram-production.imgix.net':
            case 'prod-lippincott.imgix.net':
            case 'dstudio.imgix.net':
            case 'images.prismic.io':
            case 'static.filmnet.ir':
            case 'asset.tamashakhoneh.ir':
            case 'asset.tmk.ir':
                return url.origin + url.pathname;
//---Google---
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
                return url.origin + url.pathname.replace(/=.+/, '=s8000');
//---decodl---
            case 'decodl.net':
                const pathname = decodeURIComponent(url.pathname);
                if (pathname.includes('.shutterstock.com'))
                    return url.toString().replace(/%2Fimage-vector%2F/, '%2Fz%2F').replace(/-600w-|-290w-/, '-');
                if (pathname.includes('.ftcdn.net'))
                    return url.toString();
                return pathname.includes('/api/search-service/image/')
                     ? normalizer(new URL(pathname.split('/api/search-service/image/')[1]))
                     : url.toString();
//---Wordpress sites---
            default:
                return url.pathname.includes('/wp-content/')
                     ? url.origin + url.pathname.replace(/-\d+x\d+\.|\-scaled\./, '.')
                     : url.toString();
        }
    }(new URL(location.href)));
    if (location.href !== destination) location.href = destination;
}());
