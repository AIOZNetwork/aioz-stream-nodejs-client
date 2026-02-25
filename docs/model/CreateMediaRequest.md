
# CreateMediaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description of the media |  [optional]
**isPublic** | **boolean** | // Is panoramic media IsPanoramic *bool &#x60;json:\&quot;is_panoramic\&quot; form:\&quot;is_panoramic\&quot;&#x60; Is public media |  [optional]
**metadata** | [**Array&lt;Metadata&gt;**](Metadata.md) | Metadata of the media (key-value pair, max: 50 items, key max length: 255, value max length: 255) |  [optional]
**qualities** | [**Array&lt;QualityConfig&gt;**](QualityConfig.md) | Qualities of the media (default: 1080p, 720p,  360p, allow:2160p, 1440p, 1080p, 720p,  360p, 240p, 144p) |  [optional]
**segmentDuration** | **number** | SegmentConfig |  [optional]
**tags** | **Array&lt;string&gt;** | Tags of the media (max: 50 items, max length: 255) |  [optional]
**title** | **string** | Title of the media |  [optional]
**type** | **string** | Type of the media (default: video, allowed: video, audio) |  [optional]
**watermark** | [**VideoWatermark**](VideoWatermark.md) | Media thumbnailConfig |  [optional]



