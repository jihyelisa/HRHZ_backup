package purchase.service;

import java.util.List;
import java.util.Map;

public interface PurchaseService {
	public List<Map<String, Object>> getProductDetail(String productCode);
	public List<Map<String, Object>> getProductImages(String productCode);
}
