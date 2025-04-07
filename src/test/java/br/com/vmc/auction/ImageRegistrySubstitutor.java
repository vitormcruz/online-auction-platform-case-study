package br.com.vmc.auction;

import org.testcontainers.utility.DockerImageName;
import org.testcontainers.utility.ImageNameSubstitutor;

public class ImageRegistrySubstitutor  extends ImageNameSubstitutor {

    private static final String TESTCONTAINERS_REGISTRY = "TESTCONTAINERS_REGISTRY";

    @Override
    public DockerImageName apply(DockerImageName original) {
        //This is a workaround, currently Testcontainers has an error when the registry has port definition, in which
        // the port is removed by a split that try to find the image tag.
        String registry = System.getenv().get(TESTCONTAINERS_REGISTRY);
        if (registry == null) return original;
        return original.withRegistry(registry);
    }

    @Override
    protected String getDescription() {
        return "";
    }
}
