var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_henan_boundary_1 = new ol.format.GeoJSON();
var features_henan_boundary_1 = format_henan_boundary_1.readFeatures(json_henan_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_henan_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_henan_boundary_1.addFeatures(features_henan_boundary_1);
var lyr_henan_boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_henan_boundary_1, 
                style: style_henan_boundary_1,
                popuplayertitle: 'henan_boundary',
                interactive: true,
                title: '<img src="styles/legend/henan_boundary_1.png" /> henan_boundary'
            });
var format_henan_shi_2 = new ol.format.GeoJSON();
var features_henan_shi_2 = format_henan_shi_2.readFeatures(json_henan_shi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_henan_shi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_henan_shi_2.addFeatures(features_henan_shi_2);
var lyr_henan_shi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_henan_shi_2, 
                style: style_henan_shi_2,
                popuplayertitle: 'henan_shi',
                interactive: true,
    title: 'henan_shi<br />\
    <img src="styles/legend/henan_shi_2_0.png" /> 0 - 0.11<br />\
    <img src="styles/legend/henan_shi_2_1.png" /> 0.11 - 0.26<br />\
    <img src="styles/legend/henan_shi_2_2.png" /> 0.26 - 0.39<br />\
    <img src="styles/legend/henan_shi_2_3.png" /> 0.39 - 0.57<br />\
    <img src="styles/legend/henan_shi_2_4.png" /> 0.57 - 1<br />' });
var format_waters_3 = new ol.format.GeoJSON();
var features_waters_3 = format_waters_3.readFeatures(json_waters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waters_3.addFeatures(features_waters_3);
var lyr_waters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waters_3, 
                style: style_waters_3,
                popuplayertitle: 'waters',
                interactive: true,
                title: '<img src="styles/legend/waters_3.png" /> waters'
            });

        var lyr_1_4 = new ol.layer.Tile({
            'title': '1',
            'opacity': 0.201000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

lyr_ESRI_0.setVisible(true);lyr_henan_boundary_1.setVisible(true);lyr_henan_shi_2.setVisible(true);lyr_waters_3.setVisible(true);lyr_1_4.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_henan_boundary_1,lyr_henan_shi_2,lyr_waters_3,lyr_1_4];
lyr_henan_boundary_1.set('fieldAliases', {'省代码': '省代码', '省': '省', });
lyr_henan_shi_2.set('fieldAliases', {'省代码': '省代码', '省': '省', '市代码': '市代码', '市': '市', 'PC GDP': 'PC GDP', 'aap': 'aap', '14&under': '14&under', '65&above': '65&above', 'aap_norm': 'aap_norm', 'elder_norm': 'elder_norm', 'child_norm': 'child_norm', 'gdp_norm': 'gdp_norm', 's': 's', 'fvi_raw': 'fvi_raw', 'fvi': 'fvi', });
lyr_waters_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_henan_boundary_1.set('fieldImages', {'省代码': 'TextEdit', '省': 'TextEdit', });
lyr_henan_shi_2.set('fieldImages', {'省代码': 'TextEdit', '省': 'TextEdit', '市代码': 'TextEdit', '市': 'TextEdit', 'PC GDP': 'TextEdit', 'aap': 'Range', '14&under': 'Range', '65&above': 'Range', 'aap_norm': 'TextEdit', 'elder_norm': 'TextEdit', 'child_norm': 'TextEdit', 'gdp_norm': 'TextEdit', 's': 'TextEdit', 'fvi_raw': 'TextEdit', 'fvi': 'TextEdit', });
lyr_waters_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_henan_boundary_1.set('fieldLabels', {'省代码': 'inline label - visible with data', '省': 'inline label - visible with data', });
lyr_henan_shi_2.set('fieldLabels', {'省代码': 'inline label - visible with data', '省': 'inline label - visible with data', '市代码': 'inline label - visible with data', '市': 'inline label - visible with data', 'PC GDP': 'inline label - visible with data', 'aap': 'inline label - visible with data', '14&under': 'inline label - visible with data', '65&above': 'inline label - visible with data', 'aap_norm': 'hidden field', 'elder_norm': 'hidden field', 'child_norm': 'hidden field', 'gdp_norm': 'hidden field', 's': 'hidden field', 'fvi_raw': 'inline label - visible with data', 'fvi': 'inline label - visible with data', });
lyr_waters_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - visible with data', });
lyr_waters_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});