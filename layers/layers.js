var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Location_of_Participants_1 = new ol.format.GeoJSON();
var features_Location_of_Participants_1 = format_Location_of_Participants_1.readFeatures(json_Location_of_Participants_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Location_of_Participants_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_of_Participants_1.addFeatures(features_Location_of_Participants_1);
var lyr_Location_of_Participants_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_of_Participants_1, 
                style: style_Location_of_Participants_1,
                popuplayertitle: 'Location_of_Participants',
                interactive: true,
                title: '<img src="styles/legend/Location_of_Participants_1.png" /> Location_of_Participants'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Location_of_Participants_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Location_of_Participants_1];
lyr_Location_of_Participants_1.set('fieldAliases', {'Name': 'Name', 'Country': 'Country', 'State': 'State', 'Region': 'Region', 'City': 'City', 'Photo': 'Photo', });
lyr_Location_of_Participants_1.set('fieldImages', {'Name': 'TextEdit', 'Country': 'TextEdit', 'State': 'TextEdit', 'Region': 'TextEdit', 'City': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_Location_of_Participants_1.set('fieldLabels', {'Name': 'inline label - always visible', 'Country': 'inline label - always visible', 'State': 'inline label - always visible', 'Region': 'inline label - always visible', 'City': 'inline label - always visible', 'Photo': 'inline label - visible with data', });
lyr_Location_of_Participants_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});