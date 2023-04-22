package purchase.service;

import java.util.List;
import java.util.Map;

import hrhz.dto.ProductImageDTO;

public interface PurchaseService {
	public List<Map<String, Object>> getProductImages(String productCode);
}
