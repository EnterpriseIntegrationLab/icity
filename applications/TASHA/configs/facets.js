export default {
    facets: {
        'generic': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        //Configuration Manager: change the graph name if you use another name in your general.js config
        'http://ld-r.org/configurations': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName'
            ],
            config: {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    objectBrowser: ['TagListBrowser'],
                    position: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset': {
                    shortenURI: 0,
                    position: 3
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 4
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 5
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope': {
                    objectIViewer: ['BasicOptionView'],
                    options: [
                        {label: 'Dataset', value: 'D'},
                        {label: 'Resource', value: 'R'},
                        {label: 'Property', value: 'P'},
                        {label: 'Dataset-Resource', value: 'DR'},
                        {label: 'Dataset-Property', value: 'DP'},
                        {label: 'Resource-Property', value: 'RP'},
                        {label: 'Dataset-Resource-Property', value: 'DRP'},
                    ],
                    position: 2
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType': {
                    position: 6
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName': {
                    label: ['Creator'],
                    position: 7
                }
            }
        },
        //Example Faceted Browser for DBpedia universities
        'http://dbpedia.org/sparql': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://dbpedia.org/ontology/country', 'http://dbpedia.org/property/established'
            ],
            config: {
                'http://dbpedia.org/property/established': {
                    label: ['Established Year']
                },
                'http://dbpedia.org/ontology/country': {
                    objectBrowser: ['TagListBrowser']
                }
            }
        },
        //faceted browser for TASHA data
                    //TASHA endpoint config
       'http://35.183.10.206:10035/repositories/tasha_sample': {
            list: [
                //'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                //Trip facets
                    //Start Zone coordinates startloc -> containedin -> geometry -> aswkt
                    'http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT',
                    //End Zone coordinates endloc -> containedin -> geometry -> aswkt
                    'http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT',
                    //Start Zone ID startloc -> containedin (zone)
                    'http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                    //End Zone ID endloc -> containedin (zone)
                    'http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                    //trip start time
                    'http://ontology.eil.utoronto.ca/icity/Activity/beginOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp',
                    //trip end time
                    'http://ontology.eil.utoronto.ca/icity/Activity/endOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp',
                    //viaMode
                    'http://ontology.eil.utoronto.ca/icity/Trip/viaMode',
                    //start and end activities
                        //origin activity type: *need to implement inverses*
                        'http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyAfter -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                        //destination activity type:
                        'http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyBefore -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                    //sub-trip characteristics
                        //Start Zone coordinates startloc -> containedin -> geometry -> aswkt
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT',
                        //End Zone coordinates endloc -> containedin -> geometry -> aswkt
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT',
                        //Start Zone ID startloc -> containedin (zone)
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                        //End Zone ID endloc -> containedin (zone)
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                        //trip start time
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Activity/beginOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp',
                        //trip end time
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Activity/endOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp',
                        //viaMode
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/viaMode',
                        //start and end activities
                            //origin activity type: *need to implement inverses*
                            'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyAfter -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                            //destination activity type:
                            'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyBefore -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                    //Participant characteristics:
                        //type of participant:
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                        //age of participant:
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Person/hasAge -> http://www.ontology-of-units-of-measure.org/resource/om-2/hasValue -> http://www.wurvoc.org/vocabularies/om-1.8/numerical_value',
                        //has transit pass
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/PublicTransit/hasTransitPass',
                        //has school location
                         'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Organization/enrolledIn -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/associatedLocation -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                        //has work location
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Organization/employedBy -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/associatedLocation -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                        //has occupation
                        'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Organization/employedAs -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                //passenger characteristics:
                //trip passenger
                //'http://ontology.eil.utoronto.ca/icity/Trip/hasPassenger',
                //driver characteristics:
                //trip driver
                //'http://ontology.eil.utoronto.ca/icity/Trip/hasDriver',

            //Person facets
                //age of participant:
                'http://ontology.eil.utoronto.ca/icity/Person/hasAge -> http://www.ontology-of-units-of-measure.org/resource/om-2/hasValue -> http://www.wurvoc.org/vocabularies/om-1.8/numerical_value',
                //has transit pass
                'http://ontology.eil.utoronto.ca/icity/PublicTransit/hasTransitPass',
                //has school location
                'http://ontology.eil.utoronto.ca/icity/Organization/enrolledIn -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/associatedLocation -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                //has work location
                'http://ontology.eil.utoronto.ca/icity/Organization/employedBy -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/associatedLocation -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                //has occupation
                'http://ontology.eil.utoronto.ca/icity/Organization/employedAs -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                //performs trip 'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->
                    //trip attributes
                    //Start Zone coordinates startloc -> containedin -> geometry -> aswkt
                    'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn -> http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT',
                    //End Zone coordinates endloc -> containedin -> geometry -> aswkt
                    'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn -> http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT',
                    //Start Zone ID startloc -> containedin (zone)
                    'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                    //End Zone ID endloc -> containedin (zone)
                    'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn',
                    //trip start time
                    'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Activity/beginOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp',
                    //trip end time
                    'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Activity/endOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp',
                    //viaMode
                    'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Trip/viaMode',
                    //start and end activities
                        //origin activity type: *need to implement inverses*
                        'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyAfter -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                        //destination activity type:
                        'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyBefore -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type',

            //differences between values???
            ],
            config: {
                'http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT': {
                    label: ['Start zone map'],
                    objectBrowser: ['GeoListBrowser'],
                    category: ['Trip-Focused']
                },
                'http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT': {
                    label: ['End zone map'],
                    objectBrowser: ['GeoListBrowser'],
                    category: ['Trip-Focused']
                },
                'http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn': {
                    label: ['Start zone ID'],
                    category: ['Trip-Focused']
                },
                'http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn': {
                    label: ['End zone ID'],
                    category: ['Trip-Focused']
                },
                'http://ontology.eil.utoronto.ca/icity/Activity/beginOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp': {
                    label: ['Start time'],
                    category: ['Trip-Focused'],
                    //objectBrowser:['BarChartBrowser']
                },
                'http://ontology.eil.utoronto.ca/icity/Activity/endOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp': {
                    label: ['End time'],
                    category: ['Trip-Focused'],
                    //objectBrowser:['BarChartBrowser']
                },
                'http://ontology.eil.utoronto.ca/icity/Trip/viaMode': {
                    label: ['Trip mode'],
                    category: ['Trip-Focused'],
                    objectBrowser:['BarChartBrowser']
                },
                'http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyAfter -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    label: ['Activity at origin'],
                    category: ['Trip-Focused'],
                    objectBrowser:['BarChartBrowser']
                },
                'http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyBefore -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    label: ['Activity at destination'],
                    category: ['Trip-Focused'],
                    objectBrowser:['BarChartBrowser']
                },
                'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    label: ['Traveler type'],
                    category: ['Trip-Focused'],
                    objectBrowser:['BarChartBrowser']
                },
                //age of participant:
                'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Person/hasAge -> http://www.ontology-of-units-of-measure.org/resource/om-2/hasValue -> http://www.wurvoc.org/vocabularies/om-1.8/numerical_value': {
                    label: ['Traveler age'],
                    category: ['Trip-Focused']
                },
                //has transit pass
                'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/PublicTransit/hasTransitPass': {
                    label: ['Traveler has transit pass?'],
                    category: ['Trip-Focused'],
                    objectBrowser:['BarChartBrowser']
                },
                //has school location
                 'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Organization/enrolledIn -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/associatedLocation -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn': {
                    label: ['Traveler\'s school zone ID'],
                    category: ['Trip-Focused'],
                    objectBrowser:['BarChartBrowser']
                 },
                //has work location
                'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Organization/employedBy -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/associatedLocation -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn': {
                    label: ['Traveler\'s work zone ID'],
                    category: ['Trip-Focused'],
                    objectBrowser:['BarChartBrowser']
                },
                //has occupation
                'http://ontology.eil.utoronto.ca/icity/Activity/hasParticipant -> http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Organization/employedAs -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type':{
                    label: ['Traveler\'s occupation'],
                    category: ['Trip-Focused'],
                    objectBrowser:['BarChartBrowser']
                },
                //Person facets
                    //age of participant:
                    'http://ontology.eil.utoronto.ca/icity/Person/hasAge -> http://www.ontology-of-units-of-measure.org/resource/om-2/hasValue -> http://www.wurvoc.org/vocabularies/om-1.8/numerical_value':{
                      label: ['Age'],
                      category: ['Person-Focused'],
                      objectBrowser:['BarChartBrowser']
                    },
                    //has transit pass
                    'http://ontology.eil.utoronto.ca/icity/PublicTransit/hasTransitPass':{
                      label: ['Has transit pass?'],
                      category: ['Person-Focused'],
                      objectBrowser:['BarChartBrowser']
                    },
                    //has school location
                    'http://ontology.eil.utoronto.ca/icity/Organization/enrolledIn -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/associatedLocation -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn':{
                      label: ['School zone ID'],
                      category: ['Person-Focused']
                      //objectBrowser:['BarChartBrowser']
                    },
                    //has work location
                    'http://ontology.eil.utoronto.ca/icity/Organization/employedBy -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/associatedLocation -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn':{
                      label: ['Work zone ID'],
                      category: ['Person-Focused']
                      //objectBrowser:['BarChartBrowser']
                    },
                    //has occupation
                    'http://ontology.eil.utoronto.ca/icity/Organization/employedAs -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type':{
                      label: ['Occupation'],
                      category: ['Person-Focused'],
                      objectBrowser:['BarChartBrowser']
                    },
                    //performs trip 'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->
                        //trip attributes
                        //Start Zone coordinates startloc -> containedin -> geometry -> aswkt
                        'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn -> http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT':{
                          label: ['Travels from zone (map view)'],
                          category: ['Person-Focused'],
                          objectBrowser:['GeoListBrowser']
                        },
                        //End Zone coordinates endloc -> containedin -> geometry -> aswkt
                        'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn -> http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT':{
                          label: ['Travels to zone (map view)'],
                          category: ['Person-Focused'],
                          objectBrowser:['GeoListBrowser']
                        },
                        //Start Zone ID startloc -> containedin (zone)
                        'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn':{
                          label: ['Travels from zone id'],
                          category: ['Person-Focused'],
                          objectBrowser:['BarChartBrowser']
                        },
                        //End Zone ID endloc -> containedin (zone)
                        'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn':{
                          label: ['Travels to zone id'],
                          category: ['Person-Focused'],
                          objectBrowser:['BarChartBrowser']
                        },
                        //trip start time
                        'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Activity/beginOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp':{
                          label: ['Trip start times'],
                          category: ['Person-Focused']
                          //objectBrowser:['BarChartBrowser']
                        },
                        //trip end time
                        'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Activity/endOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp':{
                          label: ['Trip end times'],
                          category: ['Person-Focused']
                          //objectBrowser:['BarChartBrowser']
                        },
                        //viaMode
                        'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Trip/viaMode':{
                          label: ['Travels via mode'],
                          category: ['Person-Focused'],
                          objectBrowser:['BarChartBrowser']
                        },
                        //start and end activities
                            //origin activity type: *need to implement inverses*
                            'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyAfter -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type':{
                              label: ['Activity before trip'],
                              category: ['Person-Focused'],
                              objectBrowser:['BarChartBrowser']
                            },
                            //destination activity type:
                            'http://ontology.eil.utoronto.ca/icity/Change/manifestationOf -> http://ontology.eil.utoronto.ca/icity/Change/hasManifestation -> http://ontology.eil.utoronto.ca/icity/Activity/participatesIn ->http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyBefore -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type':{
                              label: ['Activity after trip'],
                              category: ['Person-Focused'],
                              objectBrowser:['BarChartBrowser']
                            },
                        //sub-trip characteristics
                            //Start Zone coordinates startloc -> containedin -> geometry -> aswkt
                            'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT':{
                              label:['Sub-trip start zone (map view)'],
                              category:['Sub-trip Focused'],
                              objectBrowser:['GeoListBrowser']
                            },
                            //End Zone coordinates endloc -> containedin -> geometry -> aswkt
                            'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn -> http://www.opengis.net/ont/geosparql#hasGeometry -> http://www.opengis.net/ont/geosparql#asWKT':{
                                label:['Sub-trip end zone (map view)'],
                                category:['Sub-trip Focused'],
                                objectBrowser:['GeoListBrowser']
                            },
                            //Start Zone ID startloc -> containedin (zone)
                            'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/startLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn':{
                              label:['Sub-trip start zone ID'],
                              category:['Sub-trip Focused']
                            },
                            //End Zone ID endloc -> containedin (zone)
                            'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/endLoc -> http://ontology.eil.utoronto.ca/icity/SpatialLoc/containedIn':{
                              label:['Sub-trip end zone ID'],
                              category:['Sub-trip Focused']
                            },
                            //trip start time
                            'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Activity/beginOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp':{
                              label:['Sub-trip start time'],
                              category:['Sub-trip Focused']
                            },
                            //trip end time
                            'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Activity/endOf -> http://www.w3.org/2006/time#inXSDDateTimeStamp':{
                              label:['Sub-trip end time'],
                              category:['Sub-trip Focused']
                            },
                            //viaMode
                            'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Trip/viaMode':{
                              label:['Sub-trip mode'],
                              category:['Sub-trip Focused'],
                              objectBrowser:['BarChartBrowser']
                            },
                            //start and end activities
                                //origin activity type
                                'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyAfter -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type':{
                                  label:['Sub-trip activity at origin'],
                                  category:['Sub-trip Focused'],
                                  objectBrowser:['BarChartBrowser']
                                },
                                //destination activity type:
                                'http://ontology.eil.utoronto.ca/icity/Activity/hasSubactivity->http://ontology.eil.utoronto.ca/icity/Activity/occursDirectlyBefore -> http://www.w3.org/1999/02/22-rdf-syntax-ns#type':{
                                  label:['Sub-trip activity at destination'],
                                  category:[ 'Sub-trip Focused'],
                                  objectBrowser:['BarChartBrowser']
                                }

                }
            }
    }
};
