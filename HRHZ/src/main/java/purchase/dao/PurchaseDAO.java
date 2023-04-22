package purchase.dao;

import java.util.List;
import java.util.Map;

import hrhz.dto.ProductImageDTO;

public interface PurchaseDAO {
	public List<Map<String, Object>> getProductDetails(String productCode);
	public List<Map<String, Object>> getProductImages(String productCode);
}
