package com.adobe.cq.sample.spa.commons.impl.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

import javax.annotation.Nonnull;

/**
 * @author Ogün Adsay - 12/26/2018
 */
@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {ComponentExporter.class},
        resourceType = Button.RESOURCE_TYPE
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class Button implements ComponentExporter {
    static final String RESOURCE_TYPE = "we-retail-journal/components/button";
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
